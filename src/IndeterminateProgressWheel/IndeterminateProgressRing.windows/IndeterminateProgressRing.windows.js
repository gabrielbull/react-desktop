import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { mergeStyles } from '../../Styling';
import { startAnimation } from './Animation';

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

class ProgressRingWindows extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    form: PropTypes.any,
    absolute: PropTypes.bool,
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool,
    color: PropTypes.string
  };

  constructor(props) {
    super();
    this.state = {visible: props.visible !== false, display: props.display !== false};
  }

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
    const { color, style, absolute, visible, display, form, ...props } = this.props;

    let componentStyle = mergeStyles(style, styles.progress, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    if (absolute) {
      componentStyle = mergeStyles(componentStyle, styles.absolute);
    }

    let componentColor = color;
    if (!componentColor) {
      componentColor = '#1883d7';
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
        <div style={styles.container}>
          {svg}
        </div>
      );
    }

    return content;
  }
}

export default ProgressRingWindows;
