import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hiddenPropTypes } from '../../style/hidden';
import styles from './styles/10.11';
import { startAnimation, stopAnimation } from './progressCircleAnimation';

class ProgressCircle extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    absolute: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number
  };

  componentDidMount() {
    let elements = [];
    for (let prop in this.refs) {
      if (this.refs.hasOwnProperty(prop) && prop.match(/\d/g)) elements.push(this.refs[prop]);
    }

    this.animation = startAnimation(...elements);
  }

  componentWillUnmount() {
    stopAnimation(this.animation);
  }

  render() {
    const { size, color, style, absolute, hidden, ...props } = this.props;

    let containerStyle = { ...styles.container };
    let componentStyle = {
      ...styles.progress,
      ...style,
      visibility: !hidden ? 'visible' : 'hidden',
      display: !hidden ? 'block' : 'none'
    };

    if (absolute) {
      componentStyle = { ...componentStyle, ...styles.absolute };
    }

    let componentColor = color;
    if (!componentColor) {
      componentColor = '#000000';
    }

    if (size) {
      componentStyle = {
        ...componentStyle,
        width: size + 'px',
        height: size + 'px'
      };
      containerStyle = {
        ...containerStyle,
        height: size + 'px'
      };
    }

    const svg = (
      <svg
        ref="element"
        x="0px"
        y="0px"
        viewBox="0 0 32.3 32.3"
        style={componentStyle}
        {...props}
      >
        <path
          ref="0"
          fill={componentColor}
          d="M16.1,9.4L16.1,9.4c-0.9,0-1.6-0.7-1.6-1.6V1.6c0-0.9,0.7-1.6,1.6-1.6h0c0.9,0,1.6,0.7,1.6,1.6v6.3
	C17.7,8.7,17,9.4,16.1,9.4z"
        />
        <path
          ref="1"
          fill={componentColor}
          d="M19.4,10.3L19.4,10.3c-0.8-0.4-1-1.4-0.6-2.2L22,2.7c0.4-0.8,1.4-1,2.2-0.6l0,0c0.8,0.4,1,1.4,0.6,2.2
	l-3.1,5.4C21.2,10.5,20.2,10.7,19.4,10.3z"
        />
        <path
          ref="2"
          fill={componentColor}
          d="M21.9,12.7L21.9,12.7c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C28.7,7,29.6,7.3,30.1,8l0,0c0.4,0.8,0.2,1.7-0.6,2.2
	l-5.4,3.1C23.3,13.7,22.3,13.5,21.9,12.7z"
        />
        <path
          ref="3"
          fill={componentColor}
          d="M22.8,16.1L22.8,16.1c0-0.9,0.7-1.6,1.6-1.6h6.3c0.9,0,1.6,0.7,1.6,1.6v0c0,0.9-0.7,1.6-1.6,1.6h-6.3
	C23.5,17.7,22.8,17,22.8,16.1z"
        />
        <path
          ref="4"
          fill={componentColor}
          d="M22,19.4L22,19.4c0.4-0.8,1.4-1,2.2-0.6l5.4,3.1c0.8,0.4,1,1.4,0.6,2.2l0,0c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1
	C21.8,21.2,21.5,20.2,22,19.4z"
        />
        <path
          ref="5"
          fill={componentColor}
          d="M19.5,21.9L19.5,21.9c0.8-0.4,1.7-0.2,2.2,0.6l3.1,5.4c0.4,0.8,0.2,1.7-0.6,2.2l0,0
	c-0.8,0.4-1.7,0.2-2.2-0.6l-3.1-5.4C18.5,23.3,18.8,22.3,19.5,21.9z"
        />
        <path
          ref="6"
          fill={componentColor}
          d="M16.2,22.8L16.2,22.8c0.9,0,1.6,0.7,1.6,1.6v6.3c0,0.9-0.7,1.6-1.6,1.6h0c-0.9,0-1.6-0.7-1.6-1.6v-6.3
	C14.6,23.5,15.3,22.8,16.2,22.8z"
        />
        <path
          ref="7"
          fill={componentColor}
          d="M12.8,22L12.8,22c0.8,0.4,1,1.4,0.6,2.2l-3.1,5.4c-0.4,0.8-1.4,1-2.2,0.6l0,0c-0.8-0.4-1-1.4-0.6-2.2
	l3.1-5.4C11.1,21.8,12.1,21.5,12.8,22z"
        />
        <path
          ref="8"
          fill={componentColor}
          d="M10.3,19.5L10.3,19.5c0.4,0.8,0.2,1.7-0.6,2.2l-5.4,3.1c-0.8,0.4-1.7,0.2-2.2-0.6l0,0
	c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C8.9,18.5,9.9,18.8,10.3,19.5z"
        />
        <path
          ref="9"
          fill={componentColor}
          d="M9.4,16.2L9.4,16.2c0,0.9-0.7,1.6-1.6,1.6H1.6C0.7,17.8,0,17,0,16.2v0c0-0.9,0.7-1.6,1.6-1.6h6.3
	C8.7,14.6,9.4,15.3,9.4,16.2z"
        />
        <path
          ref="10"
          fill={componentColor}
          d="M10.3,12.8L10.3,12.8c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1C2,9.8,1.7,8.9,2.1,8.1l0,0c0.4-0.8,1.4-1,2.2-0.6
	l5.4,3.1C10.5,11.1,10.7,12.1,10.3,12.8z"
        />
        <path
          ref="11"
          fill={componentColor}
          d="M12.7,10.3L12.7,10.3c-0.8,0.4-1.7,0.2-2.2-0.6L7.4,4.3C7,3.6,7.3,2.6,8,2.2l0,0C8.8,1.7,9.8,2,10.2,2.8
	l3.1,5.4C13.7,8.9,13.5,9.9,12.7,10.3z"
        />
      </svg>
    );

    let content = svg;
    if (absolute) {
      content = (
        <div style={containerStyle}>
          {svg}
        </div>
      );
    }

    return content;
  }
}

export default ProgressCircle;
