import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ColorContext, colorPropTypes, colorContextTypes } from '../../style/color/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Radium, { getState } from 'radium';
import styles from './styles/windows10';
import ValueRef from '../../ValueRef';

@ValueRef()
@Hidden()
@ColorContext()
@ThemeContext()
@Radium
class Checkbox extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...colorPropTypes,
    ...themePropTypes,
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  static contextTypes = {
    ...colorContextTypes,
    ...themeContextTypes
  };

  constructor(props) {
    super();
    this.state = {
      checked: !!props.defaultChecked === true
    };
  }

  handleChange = event => {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    let { style, label, color, ...props } = this.props;
    let componentStyle = { ...styles.checkbox };
    let checkedStyle = { display: 'none' };
    let textStyle = { ...styles.text };

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.checkboxDark };
      textStyle = { ...textStyle, ...styles.textDark };
    }

    if (this.state.checked) {
      checkedStyle = styles.svg;
      componentStyle = {
        ...componentStyle,
        ...(this.context.theme === 'dark' ? styles['checkboxDark:checked'] : styles['checkbox:checked'])
      };

      color = color ? color : this.context.color;
      componentStyle = {
        ...componentStyle,
        backgroundColor: color,
        borderColor: color
      };
    }

    if (getState(this.state, null, ':active')) {
      componentStyle = {
        ...componentStyle,
        ...(this.context.theme === 'dark' ? styles['checkboxDark:active'] : styles['checkbox:active'])
      };
    } else if (getState(this.state, null, ':hover')) {
      componentStyle = {
        ...componentStyle,
        ...(this.context.theme === 'dark' ? styles['checkboxDark:hover'] : styles['checkbox:hover'])
      };
    }

    return (
      <div style={{ ...styles.container, ...style }}>
        <label style={styles.label}>
          <div style={styles.inputWrapper}>
            <input
              ref="element"
              type="checkbox"
              {...props}
              style={componentStyle}
              onChange={this.handleChange}
            />
            <svg x="0px" y="0px" viewBox="0 0 6.4 6.4" style={checkedStyle}>
              <polygon fill="#fff" points="0,3.3 2.2,5.5 6.4,1.23 6.1,0.9 2.2,4.8 0.3,2.9 "/>
            </svg>
          </div>
          <span style={textStyle}>
            {label}
          </span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
