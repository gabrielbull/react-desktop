import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import TextFieldOSX from './TextField/TextField.osx';
import TextFieldWindows from './TextField/TextField.windows';

class TextField extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  render() {
    if (Desktop.os === 'win') {
      return <TextFieldWindows {...this.props}/>
    } else {
      return <TextFieldOSX {...this.props}/>
    }
  }
}

export default TextField;
