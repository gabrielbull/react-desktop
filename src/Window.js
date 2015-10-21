import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import WindowOSX from './Window/Window.osx';
import WindowWindows from './Window/Window.windows';

class Window extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    chrome: PropTypes.bool,
    border: PropTypes.string,
    visible: PropTypes.bool,
    display: PropTypes.bool,
    darkTheme: PropTypes.bool
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState) {
      this.refs.component.setState(nextState);
    }
  }

  render() {
    if (Desktop.os === 'win') {
      return <WindowWindows ref="component" {...this.props}/>
    } else {
      return <WindowOSX ref="component" {...this.props}/>
    }
  }
}

export default Window;
