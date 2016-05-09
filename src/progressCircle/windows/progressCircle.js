import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Hidden } from '../../desktopComponent';
import { startAnimation, stopAnimation } from './progressCircleAnimation';
import styles from './styles/windows10';

@DesktopComponent(Hidden)
class ProgressCircle extends Component {
  static propTypes = {
    absolute: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  componentDidMount() {
    this.animation = startAnimation(
      this.refs[0],
      this.refs[1],
      this.refs[2],
      this.refs[3],
      this.refs[4],
      this.refs[5]
    );
  }

  componentWillUnmount() {
    stopAnimation(this.animation);
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

    let componentColor = color ? color : this.state.color;
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

export default ProgressCircle;
