import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Radium, { getState } from 'radium';
import styles from './styles/10.11';
import Text from '../../Text/macOs';
import Circle from './Circle';
import ValueRef from '../../ValueRef';
import WindowFocus from '../../windowFocus';

@ValueRef()
@WindowFocus()
@Hidden()
@Radium
class Radio extends Component {
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

  componentDidMount() {
    document.addEventListener('change', this.onSiblingChange);
  }

  componentWillUnmount() {
    document.removeEventListener('change', this.onSiblingChange);
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

  onSiblingChange = () => {
    if (this.refs.element.checked !== this.state.checked) {
      this.setState({ checked: this.refs.element.checked });
    }
  };

  handleChange = event => {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    let { style, label, isWindowFocused, ...props } = this.props;
    const { transition } = this.state;
    let componentStyle = { ...styles.radio, ...style };
    let labelStyle = styles.label;
    let circleColor = '#FFFFFF';
    let shadowColor = '#0050a5';

    if (this.state.checked) {
      if (isWindowFocused) {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:checked']
        };
        if (!transition) componentStyle.transition = 'none';
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:checked:unfocused']
        };
        circleColor = '#404040';
        shadowColor = '#FFFFFF';
      }
    }

    if (getState(this.state, null, ':active')) {
      if (this.state.checked) {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:checked:active']
        };
        shadowColor = '#001d99';
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:active']
        };
      }
    }

    return (
      <div style={styles.container}>
        <label style={labelStyle}>
          <div style={styles.inputWrapper}>
            <input
              ref="element"
              type="radio"
              {...props}
              style={componentStyle}
              onChange={this.handleChange}
            />
            <Circle
              show={this.state.checked}
              color={circleColor}
              shadowColor={shadowColor}
            />
          </div>
          <Text style={{ display: 'inline' }}>{label}</Text>
        </label>
      </div>
    );
  }
}

export default Radio;
