import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import styles from './styles/10.11';
import WindowFocus from '../../windowFocus';
import Dimension, { dimensionPropTypes } from '../../style/dimension';

@Dimension({ width: '100%' })
@WindowFocus()
class TitleBar extends Component {
  static propTypes = {
    ...dimensionPropTypes,
    title: PropTypes.node,
    inset: PropTypes.bool,
    controls: PropTypes.bool,
    transparent: PropTypes.bool,
    isFullscreen: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onMaximizeClick: PropTypes.func,
    onResizeClick: PropTypes.func,
    disableClose: PropTypes.bool,
    disableMinimize: PropTypes.bool,
    disableResize: PropTypes.bool,
    disableFullscreen: PropTypes.bool
  };

  static childContextTypes = {
    titlebarChild: PropTypes.bool
  };

  getChildContext() {
    return {
      titlebarChild: true
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    this.resize();
  }

  resize = () => {
    if (this.refs.title) {
      const barRect = this.refs.element.getBoundingClientRect();
      this.refs.title.style.overflow = 'visible';
      this.refs.title.style.paddingRight = 0;
      this.refs.title.style.flexGrow = 0;
      const titleRect = this.refs.title.getBoundingClientRect();
      this.refs.title.style.overflow = 'hidden';
      this.refs.title.style.flexGrow = 1;

      const barWidth = barRect.width - 6;
      const contentWidth = titleRect.width + (this.props.controls ? 60 : 0);

      let padding = barWidth - contentWidth;
      if (padding > 60) padding = 60;

      this.refs.title.style.paddingRight = padding + 'px';
    }
  };

  render() {
    let {
      children,
      inset,
      controls,
      title,
      transparent,
      isWindowFocused,
      style,
      ...props
    } = this.props;

    delete props.isFullscreen;
    delete props.onCloseClick;
    delete props.onMinimizeClick;
    delete props.onMaximizeClick;
    delete props.onResizeClick;
    delete props.disableClose;
    delete props.disableMinimize;
    delete props.disableResize;
    delete props.disableFullscreen;

    let componentStyle = { ...styles.titleBar };

    let titleStyle = styles.title;

    if (inset) {
      componentStyle = { ...componentStyle, ...styles.titleBarInset };
    }

    if (!isWindowFocused) {
      componentStyle = { ...componentStyle, ...styles.unfocusedTitleBar };
      titleStyle = { ...titleStyle, ...styles.unfocusedTitle };
    }

    controls = !controls || (
      <Controls ref="controls" inset={inset} {...this.props} />
    );
    title = !title || (
      <div ref="title" style={titleStyle}>
        {title}
      </div>
    );

    if (transparent) {
      delete componentStyle.backgroundImage;
      delete componentStyle.borderBottomWidth;
      delete componentStyle.borderBottomStyle;
      delete componentStyle.borderBottomColor;
      delete componentStyle.borderTopWidth;
      delete componentStyle.borderTopStyle;
      delete componentStyle.borderTopColor;
      delete componentStyle.borderTopLeftRadius;
      delete componentStyle.borderTopRightRadius;
    }

    return (
      <div ref="element" style={{ ...componentStyle, ...style }} {...props}>
        {controls}
        {title}
        {children}
      </div>
    );
  }
}

export default TitleBar;
