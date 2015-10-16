import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../../Styling';
import Button from './Button';
import WindowState from '../../WindowState';

var styles = {
  windows_10: {
    icon: {
      width: '10px',
      height: '10px'
    },

    ':hover': {
      backgroundColor: '#e5e5e5'
    },

    ':active': {
      backgroundColor: '#cccccc'
    }
  }
};

@Button
@WindowState
@Styling
class Minimize extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor() {
    super();
    this.state = { windowFocused: true };
  }

  get styles() {
    return mergeStyles(styles.windows_10, this.props.style);
  }

  render() {
    const { style, ...props } = this.props;

    let styles = this.styles;
    let iconStyle = this.styles.icon;
    let svgFill = '#000000';
    if (!this.state.windowFocused) {
      styles = mergeStyles(styles, this.styles.unfocused);
      svgFill = 'rgba(0, 0, 0, .4)';
    }

    return (
      <a style={applyStyle(styles)} {...props}>
        <svg x="0px" y="0px" viewBox="0 0 10.2 1" style={applyStyle(iconStyle)}>
          <rect fill={svgFill} width="10.2" height="1"/>
        </svg>
      </a>
    );
  }
}

export default Minimize;
