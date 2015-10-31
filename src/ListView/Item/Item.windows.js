import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../DesktopComponent';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class Item extends Component {
  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        style={{...styles, ...style}}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Item;
