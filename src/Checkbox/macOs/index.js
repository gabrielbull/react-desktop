import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowFocus from '../../windowFocus';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Radium, { getState } from 'radium';
import styles from './styles/10.11';
import Checkmark from './Checkmark';
import Text from '../../Text/macOs';
import ValueRef from '../../ValueRef';

@ValueRef()
@WindowFocus()
@Hidden()
@Radium
class Checkbox extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor(props) {
    super();
    this.state = {
      checked: !!props.defaultChecked === true,
      transition: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isWindowFocused !== this.props.isWindowFocused) {
      this.setState({ transition: false });
    }
  }

  componentDidUpdate() {
    if (!this.state.transition) {
      setTimeout(() => this.setState({ transition: true }), 0);
    }
  }

  onChange = event => {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    let { style, label, isWindowFocused, ...props } = this.props;
    const { transition } = this.state;
    let componentStyle = { ...styles.checkbox, ...style };
    let labelStyle = styles.label;
    let checkMarkColor = '#FFFFFF';
    let shadowColor = '#0050a5';

    if (this.state.checked) {
      if (isWindowFocused) {
        componentStyle = {
          ...componentStyle,
          ...styles['checkbox:checked']
        };
        if (!transition) componentStyle.transition = 'none';
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['checkbox:checked:unfocused']
        };
        checkMarkColor = '#404040';
        shadowColor = '#FFFFFF';
      }
    }

    if (getState(this.state, null, ':active')) {
      if (this.state.checked) {
        componentStyle = {
          ...componentStyle,
          ...styles['checkbox:checked:active']
        };
        shadowColor = '#001d99';
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['checkbox:active']
        };
      }
    }

    return (
      <div style={styles.container}>
        <label style={labelStyle}>
          <div style={styles.inputWrapper}>
            <input
              ref="element"
              type="checkbox"
              {...props}
              style={componentStyle}
              onChange={this.onChange}
            />
            <Checkmark
              show={this.state.checked}
              color={checkMarkColor}
              shadowColor={shadowColor}
            />
          </div>
          <Text style={{ display: 'inline' }}>{label}</Text>
        </label>
      </div>
    );
  }
}

export default Checkbox;
