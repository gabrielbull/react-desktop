import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import ProgressRingWindows from './Progress/ProgressRing.windows';
import IndeterminateCircularProgressIndicatorOSX from './Progress/IndeterminateCircularProgressIndicator.osx';

class ProgressCircle extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool
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
