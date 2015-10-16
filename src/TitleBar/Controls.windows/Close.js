import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle, parseStyle } from '../../Styling';
import Button from './Button';
import WindowState from '../../WindowState';

const styles = {
  windows_10: {
    icon: {
      width: '10px',
      height: '10px'
    },

    ':hover': {
      backgroundColor: '#e81123'
    },

    ':active': {
      backgroundColor: '#f1707a'
    }
  }
};

@Button
@WindowState
@Styling
class Close extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor() {
    super();
    this.state = {windowFocused: true};
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
      <a
        ref="element"
        style={applyStyle(styles)}
        {...props}
        data-hover-selector-style="polygon { fill: white; }"
        data-active-selector-style="polygon { fill: white; }"
      >
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" style={applyStyle(iconStyle)}>
          <polygon
            fill={svgFill}
            points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "
          />
        </svg>
      </a>
    );
  }
}

export default Close;
