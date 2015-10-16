import React, { Component, PropTypes } from 'react';
import { OS } from './Desktop';
import WindowOSX from './Window/Window.osx';
import WindowWindows from './Window/Window.windows';

class Window extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    chrome: PropTypes.bool,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  render() {
    if (OS === 'win') {
      return <WindowWindows {...this.props}/>
    } else {
      return <WindowOSX {...this.props}/>
    }
  }
}

export default Window;
