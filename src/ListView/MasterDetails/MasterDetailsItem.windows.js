import React, { Component, Children, cloneElement } from 'react';
import DesktopComponent from '../../DesktopComponent';
import Master from './Master/Master.windows';
import Details from './Details/Details.windows';
import Pane from './Pane.windows';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class MasterDetailsItem extends Component {
  filterChildren(children) {
    let selected = null;
    let masters = [];
    let details;
    Children.map(children, (item, key) => {
      let isSelected = false;
      Children.map(item.props.children, (child) => {
        if (child.type === Master) {
          selected = selected === null || item.props.selected ? key : selected;
          isSelected = selected === key;
          masters = [
            ...masters,
            ...(child.type === Master ? [cloneElement(child, { key: key })] : [])
          ]
        } else if (isSelected && child.type === Details) {
          details = child;
        }
      });
    } );
    masters[selected] = cloneElement(masters[selected], { selected: true });
    return { masters: masters, details: details };
  }

  render() {
    const { children, style, ...props } = this.props;
    const { masters, details } = this.filterChildren(children);

    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        <Pane>
          {masters}
        </Pane>
        {details}
      </div>
    );
  }
}

export default MasterDetailsItem;
