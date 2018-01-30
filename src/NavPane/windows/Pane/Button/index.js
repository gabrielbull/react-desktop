import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { getState } from 'radium';
import { transparentize } from '../../../../color';
import { ColorContext, colorContextTypes } from '../../../../style/color/windows';
import { ThemeContext, themeContextTypes } from '../../../../style/theme/windows';

const styles = {
  svg: {
    ':hover': {},
    ':active': {}
  }
};

@ColorContext()
@ThemeContext()
@Radium
class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  static contextTypes = {
    ...colorContextTypes,
    ...themeContextTypes
  };

  render() {
    let fill = this.context.theme === 'dark' ? '#ffffff' : '#000000';

    if (getState(this.state, null, ':active')) {
      fill = transparentize(this.context.color, .1);
    } else if (getState(this.state, null, ':hover')) {
      fill = transparentize(this.context.color, .2);
    }

    return (
      <svg
        x="0px" y="0px" viewBox="0 0 20 12.5"
        onClick={this.props.onClick}
        style={{ ...styles.svg, ...this.props.style }}
      >
        <path
          fill={fill}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0,12.5h20V11H0V12.5z M0,7h20V5.5H0V7z M0,0v1.5h20V0H0z"
        />
      </svg>
    );
  }
}

export default Button;
