import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Styling, { mergeStyles, applyStyle } from '../Styling';

var styles = {
  osx_10_11: {
    width: '16px',
    height: '16px',

    container: {
      position: 'relative',
      height: '16px'
    },

    absolute: {
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
};

@Styling
class IndeterminateCircularProgressIndicatorOSX extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    absolute: PropTypes.bool,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  framerate = 60;
  duration = 1800;

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  componentDidMount() {
    this.animate();
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

  animate() {
    this.currentStep = 0;
    this.steps = this.duration / this.framerate;
    this.increment = 1 / this.steps;
    this.animateStep();
    this.interval = setInterval(this.animateStep.bind(this), 1000 / this.framerate);
  }

  animateStep() {
    this.currentStep++;
    if (this.currentStep > this.steps) {
      this.currentStep = 1;
    }

    for (let i = 0, len = 12; i < len; ++i) {
      this.refs[11-i].style.opacity = this.increment * this.findStep(i);
    }
  }

  findStep(index) {
    let step = this.currentStep + (this.steps / 12 * index);
    if (step > this.steps) {
      step = -this.steps + step;
    }
    return this.steps - step;
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { style, absolute, visible, display, form, ...props } = this.props;
    let styles = this.styles;

    styles = mergeStyles(styles, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    if (absolute) {
      styles = mergeStyles(styles, this.styles.absolute);
    }

    const svg = (
      <svg ref="element" x="0px" y="0px" viewBox="0 0 32.3 32.3" style={applyStyle(styles)} {...props}>
        <path
          ref="0"
          fill="#000000"
          d="M16.1,9.4L16.1,9.4c-0.9,0-1.6-0.7-1.6-1.6V1.6c0-0.9,0.7-1.6,1.6-1.6h0c0.9,0,1.6,0.7,1.6,1.6v6.3
	C17.7,8.7,17,9.4,16.1,9.4z"
        />
        <path
          ref="1"
          fill="#000000"
          d="M19.4,10.3L19.4,10.3c-0.8-0.4-1-1.4-0.6-2.2L22,2.7c0.4-0.8,1.4-1,2.2-0.6l0,0c0.8,0.4,1,1.4,0.6,2.2
	l-3.1,5.4C21.2,10.5,20.2,10.7,19.4,10.3z"
        />
        <path
          ref="2"
          fill="#000000"
          d="M21.9,12.7L21.9,12.7c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C28.7,7,29.6,7.3,30.1,8l0,0c0.4,0.8,0.2,1.7-0.6,2.2
	l-5.4,3.1C23.3,13.7,22.3,13.5,21.9,12.7z"
        />
        <path
          ref="3"
          fill="#000000"
          d="M22.8,16.1L22.8,16.1c0-0.9,0.7-1.6,1.6-1.6h6.3c0.9,0,1.6,0.7,1.6,1.6v0c0,0.9-0.7,1.6-1.6,1.6h-6.3
	C23.5,17.7,22.8,17,22.8,16.1z"
        />
        <path
          ref="4"
          fill="#000000"
          d="M22,19.4L22,19.4c0.4-0.8,1.4-1,2.2-0.6l5.4,3.1c0.8,0.4,1,1.4,0.6,2.2l0,0c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1
	C21.8,21.2,21.5,20.2,22,19.4z"
        />
        <path
          ref="5"
          fill="#000000"
          d="M19.5,21.9L19.5,21.9c0.8-0.4,1.7-0.2,2.2,0.6l3.1,5.4c0.4,0.8,0.2,1.7-0.6,2.2l0,0
	c-0.8,0.4-1.7,0.2-2.2-0.6l-3.1-5.4C18.5,23.3,18.8,22.3,19.5,21.9z"
        />
        <path
          ref="6"
          fill="#000000"
          d="M16.2,22.8L16.2,22.8c0.9,0,1.6,0.7,1.6,1.6v6.3c0,0.9-0.7,1.6-1.6,1.6h0c-0.9,0-1.6-0.7-1.6-1.6v-6.3
	C14.6,23.5,15.3,22.8,16.2,22.8z"
        />
        <path
          ref="7"
          fill="#000000"
          d="M12.8,22L12.8,22c0.8,0.4,1,1.4,0.6,2.2l-3.1,5.4c-0.4,0.8-1.4,1-2.2,0.6l0,0c-0.8-0.4-1-1.4-0.6-2.2
	l3.1-5.4C11.1,21.8,12.1,21.5,12.8,22z"
        />
        <path
          ref="8"
          fill="#000000"
          d="M10.3,19.5L10.3,19.5c0.4,0.8,0.2,1.7-0.6,2.2l-5.4,3.1c-0.8,0.4-1.7,0.2-2.2-0.6l0,0
	c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C8.9,18.5,9.9,18.8,10.3,19.5z"
        />
        <path
          ref="9"
          fill="#000000"
          d="M9.4,16.2L9.4,16.2c0,0.9-0.7,1.6-1.6,1.6H1.6C0.7,17.8,0,17,0,16.2v0c0-0.9,0.7-1.6,1.6-1.6h6.3
	C8.7,14.6,9.4,15.3,9.4,16.2z"
        />
        <path
          ref="10"
          fill="#000000"
          d="M10.3,12.8L10.3,12.8c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1C2,9.8,1.7,8.9,2.1,8.1l0,0c0.4-0.8,1.4-1,2.2-0.6
	l5.4,3.1C10.5,11.1,10.7,12.1,10.3,12.8z"
        />
        <path
          ref="11"
          fill="#000000"
          d="M12.7,10.3L12.7,10.3c-0.8,0.4-1.7,0.2-2.2-0.6L7.4,4.3C7,3.6,7.3,2.6,8,2.2l0,0C8.8,1.7,9.8,2,10.2,2.8
	l3.1,5.4C13.7,8.9,13.5,9.9,12.7,10.3z"
        />
      </svg>
    );

    let content = svg;
    if (absolute) {
      content = (
        <div style={applyStyle(this.styles.container)}>
          {svg}
        </div>
      );
    }

    return content;
  }
}

export default IndeterminateCircularProgressIndicatorOSX;
