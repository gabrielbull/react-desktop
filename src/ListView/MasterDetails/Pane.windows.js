import React, { Component, Children } from 'react';
import DesktopComponent from '../../DesktopComponent';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class Pane extends Component {
  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Pane;
