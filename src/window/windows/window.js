import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent, { WindowFocus, Dimension, Alignment, Padding, Hidden } from '../../desktopComponent';
import TitleBar from '../../titleBar/windows/titleBar';
import View from '../../view/view';
import styles from './styles/windows10';

@DesktopComponent(WindowFocus, Dimension('100vw', '100vh'), Alignment, Padding, Hidden)
class Window extends Component {
  static propTypes = {
    chrome: PropTypes.bool
  };

  static styleRefs = {
    padding: 'content'
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
        ...styles.chrome,
        borderColor: this.state.color
      };

      if (!this.state.windowFocused) {
        componentStyle = { ...componentStyle, ...styles.unfocused }
      }
    }

    if (this.state.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.windowDark };
    }

    if (this.state.background) {
      componentStyle = { ...componentStyle, backgroundColor: this.state.background };
    }

    const [titleBar, ...children] = this.filterChildren();

    let content = <View ref="content" style={styles.content}>{children}</View>;

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
