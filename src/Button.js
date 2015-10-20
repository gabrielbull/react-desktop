import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
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

  componentWillUpdate(nextProps, nextState) {
    if (nextState) {
      this.refs.component.setState(nextState);
    }
  }

  render() {
    if (Desktop.os === 'win') {
      return <ButtonWindows ref="component" {...this.props}/>
    } else {
      return <ButtonOSX ref="component" {...this.props}/>
    }
  }
}

export default Button;
