import React, { Component } from 'react';
import DesktopComponent from '../../../desktop-component';
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

  titleAnimation: {
    animation: `${appear} 300ms`,
  }
};

@DesktopComponent
class Title extends Component {
  constructor(props, context, updater) {
    const { parentTheme, selected, ...properties } = props;
    super(properties, context, updater);
    this.state = {
      selected: selected,
      parentTheme: parentTheme
    };
  }

  get content() {
    return this.context.parent;
  }

  componentDidMount() {
    this.content.item.splitView.currentTitle = this.props.children;
  }

  render() {
    const { style, previousTitle, children } = this.props;
    let componentStyle = { ...styles.title, ...style };
    let fadeSpanStyle = { ...styles.title, ...style, ...styles.fadeSpanStyle };
    let spanStyle;

    if (this.state.parentTheme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.titleDark };
      fadeSpanStyle = { ...fadeSpanStyle, ...styles.titleDark };
    }

    let fadeSpan;
    if (previousTitle && previousTitle !== children) {
      fadeSpan = (
        <span style={fadeSpanStyle}>
          {previousTitle}
        </span>
      );
      spanStyle = styles.titleAnimation;
    }

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
