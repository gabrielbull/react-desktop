import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import IndeterminateProgressRingWindows
  from './IndeterminateProgressWheel/IndeterminateProgressRing.windows/IndeterminateProgressRing.windows';
import IndeterminateCircularProgressIndicatorOSX from
  './IndeterminateProgressWheel/IndeterminateCircularProgressIndicator.osx/IndeterminateCircularProgressIndicator.osx';

class IndeterminateProgressWheel extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    form: PropTypes.any,
    absolute: PropTypes.bool,
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState) {
      this.refs.component.setState(nextState);
    }
  }

  render() {
    if (Desktop.os === 'win') {
      return <IndeterminateProgressRingWindows ref="component" {...this.props}/>
    } else {
      return <IndeterminateCircularProgressIndicatorOSX ref="component" {...this.props}/>
    }
  }
}

export default IndeterminateProgressWheel;
