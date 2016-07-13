import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent, { Dimension, Alignment, Hidden, Background } from '../../desktopComponent';
import TitleBar from '../../titleBar/macOs/titleBar';
import View from '../../view/view';
import styles from './styles/10.11';
import WindowFocus from '../../windowFocus';
import Padding, { paddingPropTypes, removePaddingProps } from '../../style/padding';

@WindowFocus()
@DesktopComponent(Dimension('100vw', '100vh'), Alignment, Hidden, Background)
class Window extends Component {
  static propTypes = {
    chrome: PropTypes.bool,
    ...paddingPropTypes
  };

  static styleRefs = {
    background: 'content'
  };

  filterChildren() {
    let titleBar = '';
    let otherChildren = [];
    Children.map(this.props.children, (element) => {
      if (element.type === TitleBar) {
        titleBar = element;
      } else {
        otherChildren = [...otherChildren, element];
      }
    });

    return [titleBar, ...otherChildren];
  }

  render() {
    let { style, chrome, isWindowFocused, ...props } = this.props;

    let componentStyle = { ...styles.window, ...style };
    if (chrome) {
      componentStyle = {
        ...componentStyle,
        ...styles.chrome
      };

      if (!isWindowFocused) {
        componentStyle = { ...componentStyle, ...styles.unfocused }
      }
    }

    const [titleBar, ...children] = this.filterChildren();

    let contentStyle = styles.content;
    if (chrome) {
      contentStyle = {
        ...contentStyle,
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px'
      };
    }

    let content = Padding(
      <View style={contentStyle}>{children}</View>,
      props
    );
    props = removePaddingProps(props);

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {titleBar}
        {content}
      </div>
    );
  }
}

export default Window;
