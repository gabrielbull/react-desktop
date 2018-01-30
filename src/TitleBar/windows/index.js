import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background, {
  backgroundPropTypes
} from '../../style/background/windows';
import { hiddenPropTypes } from '../../style/hidden';
import { ColorContext, colorPropTypes } from '../../style/color/windows';
import {
  ThemeContext,
  themePropTypes,
  themeContextTypes
} from '../../style/theme/windows';
import WindowFocus from '../../windowFocus';
import Controls from './Controls';
import styles from './styles/windows10';

@Background((nextProps, prevProps, background) => ({
  ...nextProps,
  hasBackground: background
}))
@WindowFocus()
@ThemeContext()
@ColorContext()
class TitleBar extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...themePropTypes,
    ...colorPropTypes,
    ...backgroundPropTypes,
    title: PropTypes.node,
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
    const {
      children,
      style,
      controls,
      title,
      isWindowFocused,
      hasBackground,
      hidden,
      ...props
    } = this.props;

    delete props.isMaximized;
    delete props.onCloseClick;
    delete props.onMinimizeClick;
    delete props.onMaximizeClick;
    delete props.onRestoreDownClick;

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

    const controlsComponent = !controls || <Controls {...this.props} />;
    const titleComponent = !title || (
      <div style={titleStyle}>{this.props.title}</div>
    );

    if (hasBackground) delete componentStyle.backgroundColor;

    return (
      <div ref="element" style={componentStyle} {...props}>
        {titleComponent}
        {controlsComponent}
        {children}
      </div>
    );
  }
}

export default TitleBar;
