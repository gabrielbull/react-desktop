import React, { Component } from 'react';
import DesktopComponent  from '../../../DesktopComponent';
import { getState } from 'radium';
import { transparentize } from '../../../Color';

const styles = {
  svg: {
    ':hover': {},
    ':active': {}
  }
};

@DesktopComponent
class Button extends Component {
  render() {
    let fill = this.state.theme === 'dark' ? '#ffffff' : '#000000';

    if (getState(this.state, null, ':active')) {
      fill = transparentize(this.state.color, .1);
    } else if (getState(this.state, null, ':hover')) {
      fill = transparentize(this.state.color, .2);
    }

    return (
      <svg
        x="0px" y="0px" viewBox="0 0 20 12.5"
        onClick={this.props.onClick}
        style={{ ...styles.svg, ...this.props.style }}
      >
        <path
          fill={fill}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0,12.5h20V11H0V12.5z M0,7h20V5.5H0V7z M0,0v1.5h20V0H0z"
        />
      </svg>
    );
  }
}

export default Button;
