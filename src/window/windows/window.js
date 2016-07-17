import React, { Component, PropTypes, Children } from 'react';
import TitleBar from '../../titleBar/windows/titleBar';
import View from '../../view/windows/view';
import styles from './styles/windows10';
import WindowFocus from '../../windowFocus';
import Padding, { paddingPropTypes, removePaddingProps } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes }  from '../../style/dimension';

@WindowFocus()
@Alignment()
@Hidden()
@Dimension({ width: '100vw', height: '100vh' })
class Window extends Component {
  static propTypes = {
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...hiddenPropTypes,
    ...dimensionPropTypes,
    chrome: PropTypes.bool
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

    let content = Padding(
      <View ref="content" style={styles.content}>{children}</View>,
      this.props
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
