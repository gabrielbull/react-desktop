import React, { Component, PropTypes } from 'react';
import Background, { windowsBackgroundPropTypes } from '../../style/background';
import { hiddenPropTypes } from '../../style/hidden';
import { themeContextTypes } from '../../style/theme';
import WindowFocus from '../../windowFocus';
import Controls from './controls/controls';
import styles from './styles/windows10';

@Background()
@WindowFocus()
class TitleBar extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...windowsBackgroundPropTypes,
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

  static contextTypes = {
    ...themeContextTypes
  };

  getChildContext() {
    return {
      isMaximized: this.props.isMaximized
    };
  }

  render() {
    const { children, style, controls, title, isWindowFocused, hidden, ...props } = this.props;

    let componentStyle = { ...styles.titleBar, ...style };
    let titleStyle = styles.title;

    if (!isWindowFocused && this.context.theme !== 'dark') {
      titleStyle = { ...titleStyle, ...styles.unfocusedTitle };
    }

    if (this.context.theme === 'dark') {
      titleStyle = { ...titleStyle, ...styles.titleDark };
    }

    componentStyle = {
      ...componentStyle,
      visibility: !hidden ? 'visible' : 'hidden',
      display: !hidden ? 'flex' : 'none'
    };

    if (this.context.theme === 'dark') {
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
