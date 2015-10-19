import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import SegmentedControlOSX from './SegmentedControl/SegmentedControl.osx';

class SegmentedControl extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  render() {
    if (Desktop.os === 'win') {
      return <div {...this.props}/>
    } else {
      return <SegmentedControlOSX {...this.props}/>
    }
  }
}

export default SegmentedControl;
