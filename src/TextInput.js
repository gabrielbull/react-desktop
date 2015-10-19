import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import TextFieldOSX from './TextInput/TextField.osx';
import TextBoxWindows from './TextInput/TextBox.windows';

class TextField extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  render() {
    if (Desktop.os === 'win') {
      return <TextBoxWindows {...this.props}/>
    } else {
      return <TextFieldOSX {...this.props}/>
    }
  }
}

export default TextField;
