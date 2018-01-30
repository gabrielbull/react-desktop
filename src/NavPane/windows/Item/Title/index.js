import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { keyframes } from 'radium';
import styles from '../../style/windows10';

var appear = keyframes({
  '0%': {
    opacity: 0
  },
  '29%': {
    opacity: 0,
    transform: 'translateY(9px)'
  },
  '30%': {
    opacity: .35,
    transform: 'translateY(9px)'
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)'
  }
}, 'Title');

var fadeOut = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
}, 'span');


styles.titleAnimation = {
  animation: 'x 300ms forwards',
  animationName: appear
};

styles.fadeSpanStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  animation: 'x 100ms forwards',
  animationName: fadeOut
};

@Radium
class Title extends Component {
  static propTypes = {
    theme: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
  };

  render() {
    const { title, prevTitle } = this.props;

    let componentStyle = { ...styles.title };
    let fadeSpanStyle = { ...styles.title };
    let titleStyle = {};

    if (this.props.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.titleDark };
      fadeSpanStyle = { ...fadeSpanStyle, ...styles.titleDark };
    }

    if (prevTitle && prevTitle !== title) {
      fadeSpanStyle = { ...fadeSpanStyle, ...styles.fadeSpanStyle };
      titleStyle = { ...titleStyle, opacity: 0, ...styles.titleAnimation }
    }

    let fadeSpan;
    if (prevTitle) {
      fadeSpan = (
        <span style={fadeSpanStyle}>
          {prevTitle}
        </span>
      );
    }

    return (
      <div
        style={componentStyle}
      >
        {fadeSpan}
        <span style={titleStyle}>
          {title}
        </span>
      </div>
    );
  }
}

export default Title;
