import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import DesktopComponent  from '../../DesktopComponent';
import { keyframes } from 'radium';

var appear = keyframes({
  '0%': {
    opacity: 0,
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

const styles = {
  title: {
    position: 'relative',
    color: '#000000',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    textTransform: 'uppercase',
    padding: '0 24px',
    overflow: 'hidden'
  },

  titleDark: {
    color: '#ffffff',
  },

  fadeSpanStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    animation: `${fadeOut} 100ms forwards`
  },

  test: {
    animation: `${appear} 300ms`,
  }
};

@DesktopComponent
class Title extends Component {
  constructor(props, context, updater) {
    const { parentRequestedTheme, selected, ...properties } = props;
    super(properties, context, updater);
    if (selected) {
      this.initialShow = true;
    }
    this.state = {
      selected: selected,
      parentRequestedTheme: parentRequestedTheme
    };
  }

  get content() {
    return this.context.parent;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.selected !== this.state.selected) ||
      (nextState.parentRequestedTheme !== this.state.parentRequestedTheme) ||
      (nextState.requestedTheme !== this.state.requestedTheme) ||
      (nextState.visible !== this.state.visible) ||
      (nextState.display !== this.state.display);
  }

  componentWillUpdate(nextProps, nextState) {
    this.state.animate = nextState.selected && !this.state.selected;
  }

  render() {
    const { style, children } = this.props;
    let componentStyle = {...styles.title, ...style};
    let fadeSpanStyle = {...styles.title, ...style, ...styles.fadeSpanStyle};
    let spanStyle;

    if (this.state.parentRequestedTheme === 'dark') {
      componentStyle = {...componentStyle, ...styles.titleDark};
      fadeSpanStyle = {...fadeSpanStyle, ...styles.titleDark};
    }

    let fadeSpan;
    if (this.state.selected && !this.initialShow) {
      if (this.content.item.splitView.currentTitle !== children) {
        fadeSpan = (
          <span style={fadeSpanStyle}>
            {this.content.item.splitView.currentTitle}
          </span>
        );
      }
      spanStyle = styles.test;
    }

    if (this.state.selected) {
      this.content.item.splitView.currentTitle = children;
    }
    this.initialShow = false;

    return (
      <div style={componentStyle}>
        {fadeSpan}
        <span style={spanStyle}>
          {children}
        </span>
      </div>
    );
  }
}

export default Title;
