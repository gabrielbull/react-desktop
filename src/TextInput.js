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

  componentWillUpdate(nextProps, nextState) {
    if (nextState) {
      this.refs.component.setState(nextState);
    }
  }

  render() {
    if (Desktop.os === 'win') {
      return <TextBoxWindows ref="component" {...this.props}/>
    } else {
      return <TextFieldOSX ref="component" {...this.props}/>
    }
  }
}

export default TextField;
