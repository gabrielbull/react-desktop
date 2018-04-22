import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { getState } from 'radium';
import styles from './styles/windows';
import Text from '../../Text/windows';
import {
  ThemeContext,
  themePropTypes,
  themeContextTypes
} from '../../style/theme/windows';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import {
  ColorContext,
  colorPropTypes,
  colorContextTypes
} from '../../style/color/windows';
import ValueRef from '../../ValueRef';

@ValueRef()
@Hidden()
@ColorContext()
@ThemeContext()
@Radium
class Radio extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...colorPropTypes,
    ...themePropTypes,
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  static contextTypes = {
    ...themeContextTypes,
    ...colorContextTypes
  };

  constructor(props) {
    super();
    this.state = {
      checked: !!props.defaultChecked === true
    };
  }

  componentDidMount() {
    document.addEventListener('change', this.onSiblingChange);
  }

  componentWillUnmount() {
    document.removeEventListener('change', this.onSiblingChange);
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
    let { style, label, color, ...props } = this.props;
    let componentStyle = {
      ...styles.radio,
      ...(this.context.theme === 'dark' ? styles['radioDark'] : {})
    };
    let labelStyle = styles.label;
    let circleStyle = {
      ...styles.circle,
      ...(this.context.theme === 'dark' ? styles['circleDark'] : {})
    };

    if (this.state.checked) {
      componentStyle = {
        ...componentStyle,
        borderColor: color || this.context.color
      };
    }

    if (getState(this.state, null, ':active')) {
      if (this.state.checked) {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:checked:active'],
          ...(this.context.theme === 'dark'
            ? styles['radioDark:checked:active']
            : {})
        };
        circleStyle = {
          ...circleStyle,
          ...styles['circle:active'],
          ...(this.context.theme === 'dark' ? styles['circleDark:active'] : {})
        };
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:active'],
          ...(this.context.theme === 'dark' ? styles['radioDark:active'] : {})
        };
      }
    } else if (getState(this.state, null, ':hover')) {
      if (this.state.checked) {
        circleStyle = {
          ...circleStyle,
          ...styles['circle:hover'],
          ...(this.context.theme === 'dark' ? styles['circleDark:hover'] : {})
        };
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:hover'],
          ...(this.context.theme === 'dark' ? styles['radioDark:hover'] : {})
        };
      }
    }

    componentStyle = { ...componentStyle, ...style };

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
            {this.state.checked ? <div style={circleStyle} /> : null}
          </div>
          <Text
            style={{
              ...styles.text,
              ...(this.context.theme === 'dark' ? styles.textDark : {})
            }}
          >
            {label}
          </Text>
        </label>
      </div>
    );
  }
}

export default Radio;
