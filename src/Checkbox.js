import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
//import TextFieldOSX from './TextInput/TextField.osx';
import CheckboxWindows from './Checkbox/Checkbox.windows';

class Checkbox extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  render() {
    if (Desktop.os === 'win') {
      return <CheckboxWindows {...this.props}/>
    } else {
      return <CheckboxWindows {...this.props}/>
    }
  }
}

export default Checkbox;
