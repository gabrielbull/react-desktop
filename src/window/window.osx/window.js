import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent, { WindowFocus, Dimension, Alignment, Padding, Hidden, Background } from '../../desktop-component';
import TitleBar from '../../title-bar/title-bar.osx/title-bar';
import View from '../../view/view';
import styles from './styles/osx.10.11';

@DesktopComponent(WindowFocus, Dimension('100vw', '100vh'), Alignment, Padding, Hidden, Background)
class Window extends Component {
  static propTypes = {
    chrome: PropTypes.bool
  };

  static styleRefs = {
    padding: 'content',
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
    let { style, chrome, ...props } = this.props;

    let componentStyle = { ...styles.window, ...style };
    if (chrome) {
      componentStyle = {
        ...componentStyle,
        ...styles.chrome
      };

      if (!this.state.windowFocused) {
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

    let content = <View ref="content" style={contentStyle}>{children}</View>;

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
