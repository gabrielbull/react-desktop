import React, { Component } from 'react';

export default function WindowState(ComposedComponent) {
  return class extends Component {
    componentDidMount() {
      if (window) {
        window.addEventListener('focus', this.windowFocus);
        window.addEventListener('blur', this.windowBlur);
      }
    }

    componentWillUnmount() {
      if (window) {
        window.removeEventListener('focus', this.windowFocus);
        window.removeEventListener('blur', this.windowBlur);
      }
    }

    componentWillUpdate(nextProps, nextState) {
      if (nextState) {
        this.refs.component.setState(nextState);
      }
    }

    windowFocus = () => {
      if (this.refs.component) {
        this.refs.component.setState({ windowFocused: true });
      }
    }

    windowBlur = () => {
      if (this.refs.component) {
        this.refs.component.setState({ windowFocused: false });
      }
    }

    render() {
      return (
        <ComposedComponent ref="component" {...this.props}/>
      );
    }
  };
}
