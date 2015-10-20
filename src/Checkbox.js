import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import CheckboxWindows from './Checkbox/Checkbox.windows';

class Checkbox extends Component {
  static propTypes = {
    style: PropTypes.object,
    row: PropTypes.any,
    form: PropTypes.any,
    label: PropTypes.string,
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
      return <CheckboxWindows ref="component" {...this.props}/>
    } else {
      return <CheckboxWindows ref="component" {...this.props}/>
    }
  }
}

export default Checkbox;
