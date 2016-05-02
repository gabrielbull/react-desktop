import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Hidden } from '../../desktopComponent';
import { getState } from 'radium';
import styles from './styles/windows10';

@DesktopComponent(Hidden)
class Checkbox extends Component {
  static propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor(props) {
    super();
    this.state = {
      checked: props.defaultChecked === true
    };
  }

  onChange = event => {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    let { style, label, color, ...props } = this.props;
    let componentStyle = { ...styles.checkbox, ...style };
    let checkedStyle = { display: 'none' };
    let labelStyle = styles.label;

    if (this.state.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.checkboxDark };
      labelStyle = { ...labelStyle, ...styles.labelDark };
    }

    if (this.state.checked) {
      checkedStyle = styles.svg;
      componentStyle = {
        ...componentStyle,
        ...(this.state.theme === 'dark' ? styles['checkboxDark:checked'] : styles['checkbox:checked'])
      };

      if (color && color !== true) {
        componentStyle = {
          ...componentStyle,
          backgroundColor: color,
          borderColor: color
        };
      } else {
        componentStyle = {
          ...componentStyle,
          backgroundColor: this.state.color,
          borderColor: this.state.color
        };
      }
    }

    if (getState(this.state, null, ':active')) {
      componentStyle = {
        ...componentStyle,
        ...(this.state.theme === 'dark' ? styles['checkboxDark:active'] : styles['checkbox:active'])
      };
    } else if (getState(this.state, null, ':hover')) {
      componentStyle = {
        ...componentStyle,
        ...(this.state.theme === 'dark' ? styles['checkboxDark:hover'] : styles['checkbox:hover'])
      };
    }

    return (
      <label style={labelStyle}>
        <input
          ref="element"
          type="checkbox"
          {...props}
          style={componentStyle}
          onChange={this.onChange}
        />
        <svg x="0px" y="0px" viewBox="0 0 6.4 6.4" style={checkedStyle}>
          <polygon fill="#fff" points="0,3.3 2.2,5.5 6.4,1.23 6.1,0.9 2.2,4.8 0.3,2.9 "/>
        </svg>
        {label}
      </label>
    );
  }
}

export default Checkbox;
