import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Styling, { mergeStyles, applyStyle } from '../Styling';

var styles = {
  osx_10_11: {
    width: '16px',
    height: '16px',
    position: 'relative',

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
    require('./ProgressRing.windows/Animation.js');
    //this.animate();
    if (ReactDOM.findDOMNode(this).previousSibling) {
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
    /*this.currentStep = 0;
    this.steps = this.duration / this.framerate;
    this.increment = 1 / this.steps;
    this.animateStep();
    this.interval = setInterval(this.animateStep.bind(this), 1000 / this.framerate);*/
  }

  animateStep() {
    this.currentStep++;
    if (this.currentStep > this.steps) {
      this.currentStep = 1;
    }

    for (let i = 0, len = 12; i < len; ++i) {
      this.refs[11 - i].style.opacity = this.increment * this.findStep(i);
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
    if (!this.state.visible) {
      styles = mergeStyles(styles, {visibility: 'hidden'});
    } else {
      styles = mergeStyles(styles, {visibility: 'visible'});
    }

    if (!this.state.display) {
      styles = mergeStyles(styles, {display: 'none'});
    } else {
      styles = mergeStyles(styles, {display: 'block'});
    }

    if (absolute) {
      styles = mergeStyles(styles, this.styles.absolute);
    }

    const svg = (
      <svg
        id="field"
        ref="element" x="0px" y="0px" viewBox="0 0 150 150" style={applyStyle(styles)} {...props}>
        <circle id="ball" ref="0" fill="#000000" cx="66" cy="7.3" r="7.3" style={{position: 'absolute'}}/>
        <circle ref="1" fill="#000000" cx="66" cy="142.7" r="7.3"/>
        <circle ref="2" fill="#000000" cx="7.3" cy="41.2" r="7.3"/>
        <circle ref="3" fill="#000000" cx="7.3" cy="108.9" r="7.3"/>
        <circle ref="4" fill="#000000" cx="124.6" cy="108.9" r="7.3"/>
        <circle ref="5" fill="#000000" cx="124.6" cy="41.2" r="7.3"/>
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

export default ProgressRingWindows;
