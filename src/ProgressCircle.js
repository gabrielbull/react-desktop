import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import ProgressRingWindows from './ProgressCircle/ProgressRing.windows';
import IndeterminateCircularProgressIndicatorOSX from './ProgressCircle/IndeterminateCircularProgressIndicator.osx';

class ProgressCircle extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    form: PropTypes.any,
    absolute: PropTypes.bool,
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool,
    color: PropTypes.string
  };

  render() {
    if (Desktop.os === 'win') {
      return <ProgressRingWindows {...this.props}/>
    } else {
      return <IndeterminateCircularProgressIndicatorOSX {...this.props}/>
    }
  }
}

export default ProgressCircle;
