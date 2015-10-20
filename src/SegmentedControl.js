import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import SegmentedControlOSX from './SegmentedControl/SegmentedControl.osx';

class SegmentedControl extends Component {
  static Item = Desktop.os === 'win' ? (<div/>) : SegmentedControlOSX.Item;

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
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
      return <div ref="component" {...this.props}/>
    } else {
      return <SegmentedControlOSX ref="component" {...this.props}/>
    }
  }
}

export default SegmentedControl;
