import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../../Styling';
import Button from './Button';
import WindowState from '../../WindowState';

const styles = {
  osx_10_11: {
    backgroundColor: '#ff5f57',
    borderColor: '#e2463f',

    unfocused: {
      backgroundColor: '#dddddd',
      borderColor: '#d0d0d0',
    },

    icon: {
      width: '6px',
      height: '6px',
      marginTop: '2px',
      marginLeft: '2px'
    },

    ':active': {
      backgroundColor: '#bf4943',
      borderColor: '#ad3934'
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
    this.state = { iconVisible: false, windowFocused: true };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    const { style, ...props } = this.props;
    const displayIcon = this.state.iconVisible ? { opacity: 1 } : { opacity: 0 };
    const iconStyle = mergeStyles(this.styles.icon, displayIcon);

    let styles = this.styles;
    if (!this.state.windowFocused && !this.state.iconVisible) {
      styles = mergeStyles(styles, styles.unfocused)
    }

    return (
      <a style={applyStyle(styles)} {...props}>
        <svg x="0px" y="0px" viewBox="0 0 6.4 6.4" style={iconStyle}>
          <polygon fill="#4d0000" points="6.4,0.8 5.6,0 3.2,2.4 0.8,0 0,0.8 2.4,3.2 0,5.6 0.8,6.4 3.2,4 5.6,6.4 6.4,5.6 4,3.2 "/>
        </svg>
      </a>
    );
  }
}

export default Close;
