import React, { Component, PropTypes } from 'react';
import DesktopComponent, { WindowFocus, Background } from '../../desktopComponent';
import Controls from './controls/controls';
import styles from './styles/windows10';

@DesktopComponent(WindowFocus, Background)
class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    controls: PropTypes.bool,
    isMaximized: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onMaximizeClick: PropTypes.func,
    onRestoreDownClick: PropTypes.func
  };

  static childContextTypes = {
    isMaximized: PropTypes.bool
  };

  getChildContext() {
    return {
      isMaximized: this.props.isMaximized
    };
  }

  render() {
    const { children, style, controls, title, ...props } = this.props;

    let componentStyle = { ...styles.titleBar, ...style };
    let titleStyle = styles.title;

    if (!this.state.windowFocused && this.state.theme !== 'dark') {
      titleStyle = { ...titleStyle, ...styles.unfocusedTitle };
    }

    if (this.state.theme === 'dark') {
      titleStyle = { ...titleStyle, ...styles.titleDark };
    }

    componentStyle = {
      ...componentStyle,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    };

    if (this.state.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.titleBarDark };
    }

    const controlsComponent = !controls || <Controls {...this.props}/>;
    const titleComponent = !title ||
      <div style={titleStyle}>
        {this.props.title}
      </div>;

    if (this.props.background) delete componentStyle.backgroundColor;

    return (
      <div
        ref="element"
        style={componentStyle}
        {...props}
      >
        {titleComponent}
        {controlsComponent}
        {children}
      </div>
    );
  }
}

export default TitleBar;
