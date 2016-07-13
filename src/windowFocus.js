import { windowIsFocused } from './monitor';
import React, { Component, PropTypes, cloneElement } from 'react';

function WindowFocus(options, ComposedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        isWindowFocused: windowIsFocused()
      };
    }

    componentDidMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('focus', this.windowFocus);
        window.addEventListener('blur', this.windowBlur);
      }
    }

    componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('focus', this.windowFocus);
        window.removeEventListener('blur', this.windowBlur);
      }
    }

    windowFocus = () => {
      this.setState({ isWindowFocused: true });
    };

    windowBlur = () => {
      this.setState({ isWindowFocused: false });
    };

    render() {
      return <ComposedComponent isWindowFocused={this.state.isWindowFocused} {...this.props}/>;
    }
  }
}

export default function(...options) {
  if (options.length === 1 && typeof options[0] === 'function') return WindowFocus.apply(null, [[], options[0]]);
  return WindowFocus.bind(null, options);
}
/*
 class WindowFocusComponent {
 constructor(root) {
 this.root = root;
 this.root.state.windowFocused = true;
 }

 componentDidMount() {
 if (typeof window !== 'undefined') {
 window.addEventListener('focus', this.windowFocus);
 window.addEventListener('blur', this.windowBlur);
 }
 }

 componentWillUnmount() {
 if (typeof window !== 'undefined') {
 window.removeEventListener('focus', this.windowFocus);
 window.removeEventListener('blur', this.windowBlur);
 }
 }

 windowFocus = () => {
 this.root.setState({ windowFocused: true });
 };

 windowBlur = () => {
 this.root.setState({ windowFocused: false });
 };
 }

 export default WindowFocusComponent;

 */
