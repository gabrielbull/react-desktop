import React, { Component } from 'react';
import DesktopComponent  from '../../DesktopComponent';

@DesktopComponent
class SplitViewWindows extends Component {
  render() {
    let { children, style, ...props } = this.props;
    return (
      <div
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default SplitViewWindows;
