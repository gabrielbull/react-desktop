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
  getMasters() {
    let masters = [];
    Children.map(this.props.children, (item) => {
      Children.map(item.props.children, (child) => {
        masters = [
          ...masters,
          ...(child.type === Master ? [child] : [])
        ]
      });
    } );
    return masters;
  }

  getSelectedMaster() {
    let selected;
    for (let master of this.getMasters()) {
      selected = selected || master;
      if (master.props.selected) {
        selected = master;
      }
    }
    return selected;
  }

  getSelectedDetails() {
    let selected = this.getSelectedMaster();
    let selectedDetails;
    Children.map(this.props.children, (item) => {
      let isSelected = false;
      Children.map(item.props.children, (child) => {
        if (child.type === Master) {
          isSelected = child === selected;
        }
        if (isSelected && child.type === Details) {
          selectedDetails = child;
        }
      });
    } );
    return selectedDetails;
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
        {this.getSelectedDetails()}
      </div>
    );
  }
}

export default MasterDetailsItem;
