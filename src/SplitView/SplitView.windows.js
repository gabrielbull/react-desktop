import React, { Component } from 'react';
import DesktopComponent  from '../DesktopComponent';
import Pane from './Pane/Pane.windows';
import Content from './Content/Content.windows';

const styles = {
  display: 'flex'
};

@DesktopComponent
class SplitViewWindows extends Component {
  static Pane = Pane;
  static Content = Content;

  render() {
    let { children, style, ...props } = this.props;

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

export default SplitViewWindows;
