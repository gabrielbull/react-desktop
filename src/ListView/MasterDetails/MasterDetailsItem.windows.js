import React, { Component, Children } from 'react';
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
  render() {
    const { children, style, ...props } = this.props;

    const masters = Children.map(children, (item) => {
      return Children.map(item.props.children, (child) => child.type === Master ? child : null);
    } );

    const details = Children.map(children, (item) => {
      return Children.map(item.props.children, (child) => child.type === Details ? child : null);
    } );

    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        <Pane>
          {masters}
        </Pane>
        <Details/>
      </div>
    );
  }
}

export default MasterDetailsItem;
