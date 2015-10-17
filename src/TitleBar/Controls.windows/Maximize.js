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
      transition: 'background-color 0.1s',
      backgroundColor: '#e5e5e5',
    },

    ':active': {
      backgroundColor: '#cccccc',
    }
  }
};

@Button
@WindowState
@Styling
class Resize extends Component {
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
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" style={applyStyle(iconStyle)}>
          <path
            fill={svgFill}
            d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"
          />
        </svg>
      </a>
    );
  }
}

export default Resize;
