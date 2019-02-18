import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../../TitleBar/windows';
import View from '../../View/windows';
import styles from './styles/windows10';
import WindowFocus from '../../windowFocus';
import Padding, {
  paddingPropTypes,
  removePaddingProps
} from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import {
  ColorContext,
  colorPropTypes,
  colorContextTypes
} from '../../style/color/windows';
import {
  ThemeContext,
  themePropTypes,
  themeContextTypes
} from '../../style/theme/windows';

@WindowFocus()
@Alignment()
@Hidden()
@Dimension({ width: '100vw', height: '100vh' })
@ColorContext()
@ThemeContext()
class Window extends Component {
  static propTypes = {
    ...colorPropTypes,
    ...themePropTypes,
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...hiddenPropTypes,
    ...dimensionPropTypes,
    chrome: PropTypes.bool
  };

  static contextTypes = {
    ...colorContextTypes,
    ...themeContextTypes
  };

  filterChildren() {
    let titleBar = '';
    let otherChildren = [];
    Children.map(this.props.children, element => {
      const TitleBarEl = <TitleBar />;
      if (element.type === TitleBarEl.type) {
        titleBar = element;
      } else {
        otherChildren = [...otherChildren, element];
      }
    });

    return [titleBar, ...otherChildren];
  }

  render() {
    let { style, background, chrome, isWindowFocused, ...props } = this.props;

    let componentStyle = { ...styles.window, ...style };
    if (chrome) {
      componentStyle = {
        ...componentStyle,
        ...styles.chrome,
        borderColor: this.context.color
      };

      if (!isWindowFocused) {
        componentStyle = { ...componentStyle, ...styles.unfocused };
      }
    }

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.windowDark };
    }

    if (background) {
      componentStyle = { ...componentStyle, backgroundColor: background };
    }

    const [titleBar, ...children] = this.filterChildren();

    let content = Padding(
      <View ref="content" style={styles.content}>
        {children}
      </View>,
      this.props
    );

    props = removePaddingProps(props);
    return (
      <div style={componentStyle} {...props}>
        {titleBar}
        {content}
      </div>
    );
  }
}

export default Window;
