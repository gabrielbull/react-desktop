import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import TitleBarOX from './TitleBar/TitleBar.osx';
import TitleBarWindows from './TitleBar/TitleBar.windows';

class TitleBar extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    title: PropTypes.string,
    controls: PropTypes.bool,
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onMaximizePress: PropTypes.func,
    onResizePress: PropTypes.func,
    background: PropTypes.string,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState) {
      this.refs.component.setState(nextState);
    }
  }

  render() {
    if (Desktop.os === 'win') {
      return <TitleBarWindows ref="component" {...this.props}/>
    } else {
      return <TitleBarOX ref="component" {...this.props}/>
    }
  }
}

export default TitleBar;
