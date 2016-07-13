import React, { Component, PropTypes } from 'react';
import Controls from './controls/controls';
import styles from './styles/10.11';
import WindowFocus from '../../windowFocus';

@WindowFocus()
class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    controls: PropTypes.bool,
    transparent: PropTypes.bool,
    isFullscreen: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onMaximizeClick: PropTypes.func,
    onResizeClick: PropTypes.func
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
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

      this.refs.title.style.paddingRight = (padding) + 'px';
    }
  };

  render() {
    let {
      children,
      controls,
      title,
      transparent,
      isWindowFocused,
      ...props
    } = this.props;

    delete props.isFullscreen;
    delete props.onCloseClick;
    delete props.onMinimizeClick;
    delete props.onMaximizeClick;
    delete props.onResizeClick;

    let componentStyle = { ...styles.titleBar };
    if (children) {
      componentStyle = { ...componentStyle, ...styles.toolbar };
    }

    let titleStyle = styles.title;

    if (!isWindowFocused) {
      componentStyle = { ...componentStyle, ...styles.unfocusedTitleBar };
      titleStyle = { ...titleStyle, ...styles.unfocusedTitle }
    }

    controls = !controls || <Controls ref="controls" {...this.props}/>;
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
      <div
        ref="element"
        style={componentStyle}
        {...props}
      >
        {controls}
        {title}
        {children}
      </div>
    );
  }
}

export default TitleBar;
