import React, { Component, PropTypes } from 'react';
import { OS } from './Desktop';
import ButtonOSX from './Button/PushButton.osx';
import ButtonWindows from './Button/Button.windows';

class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]).isRequired,
    form: PropTypes.any,
    color: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onPress: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
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
