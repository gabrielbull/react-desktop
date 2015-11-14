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
  selectedDetails;

  getMasters() {
    let selected = null;
    let masters = [];
    Children.map(this.props.children, (item, index) => {
      let isSelected = false;
      Children.map(item.props.children, (child, key) => {
        if (child.type === Master) {
          selected = selected === null || item.props.selected ? index : selected;
          isSelected = selected === index;
          masters = [
            ...masters,
            ...(child.type === Master ? [cloneElement(child, { key: index })] : [])
          ]
        } else if (isSelected && child.type === Details) {
          this.selectedDetails = child;
        }
      });
    } );
    masters[selected] = cloneElement(masters[selected], { selected: true });
    return masters;
  }

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        <Pane>
          {this.getMasters()}
        </Pane>
        {this.selectedDetails}
      </div>
    );
  }
}

export default MasterDetailsItem;
