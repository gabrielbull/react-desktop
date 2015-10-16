import React, { Component } from 'react';

export default function WindowState(ComposedComponent) {
  return class extends Component {
    componentDidMount() {
      if (window) {
        window.addEventListener('focus', this.windowFocus.bind(this));
        window.addEventListener('blur', this.windowBlur.bind(this));
      }
    }

    componentWillUnmount() {
      if (window) {
        window.removeEventListener('focus', this.windowFocus.bind(this));
        window.removeEventListener('blur', this.windowBlur.bind(this));
      }
    }

    componentWillUpdate(nextProps, nextState) {
      if (nextState) {
        this.refs.component.setState(nextState);
      }
    }

    windowFocus() {
      if (this.refs.component) {
        this.refs.component.setState({ windowFocused: true });
      }
    }

    windowBlur() {
      if (this.refs.component) {
        this.refs.component.setState({windowFocused: false});
      }
    }

    render() {
      return (
        <ComposedComponent ref="component" {...this.props}/>
      );
    }
  };
}
