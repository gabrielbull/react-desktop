import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import DesktopComponent from '../../desktop-component';
import { startAnimation } from './progress-circle-animation';

var styles = {
  progress: {
    width: '20px',
    height: '20px',
    position: 'relative'
  },

  container: {
    position: 'relative',
    height: '20px'
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0
  }
};

@DesktopComponent
class ProgressRingWindows extends Component {
  static propTypes = {
    absolute: PropTypes.bool,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    size: PropTypes.number
  };

  componentDidMount() {
    startAnimation(
      this.refs[0],
      this.refs[1],
      this.refs[2],
      this.refs[3],
      this.refs[4],
      this.refs[5]
    );

    if (findDOMNode(this).previousSibling) {
      this.applySiblingStyle();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  applySiblingStyle() {
    if (!this.refs.element.style.marginLeft) {
      this.refs.element.style.marginLeft = '12px';
    }
  }

  render() {
    const { size, color, style, absolute, ...props } = this.props;

    let containerStyle = { ...styles.container };
    let componentStyle = {
      ...styles.progress,
      ...style,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    };

    if (absolute) {
      componentStyle = { ...componentStyle, ...styles.absolute };
    }

    let componentColor = '#1883d7';
    switch (color) {
    case true:
      componentColor = this.state.color;
      break;
    case 'blue':
      componentColor = '#1883d7';
      break;
    default:
      if (color) {
        componentColor = color;
      }
      break;
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
        id="field"
        ref="element"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
        style={componentStyle}
        {...props}
      >
        <circle ref="0" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="1" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="2" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="3" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="4" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
        <circle ref="5" fill={componentColor} fillOpacity="0" cx="75" cy="75" r="7.3"/>
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

export default ProgressRingWindows;
