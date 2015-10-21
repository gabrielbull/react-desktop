import React, { Component } from 'react';
import DesktopComponent  from '../DesktopComponent';
import View from './View/View.windows';

@DesktopComponent
class SplitViewWindows extends Component {
  static View = View;

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
