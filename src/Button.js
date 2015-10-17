import React, { Component, PropTypes } from 'react';
import { OS } from './Desktop';
import ButtonOSX from './Button/PushButton.osx';
import ButtonWindows from './Button/Button.windows';

class Button extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  render() {
    if (OS === 'win') {
      return <ButtonWindows {...this.props}/>
    } else {
      return <ButtonOSX {...this.props}/>
    }
  }
}

export default Button;
