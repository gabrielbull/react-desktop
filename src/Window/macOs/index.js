import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../../TitleBar/macOs';
import View from '../../View/macOs';
import styles from './styles/10.11';
import WindowFocus from '../../windowFocus';
import Padding, {
  paddingPropTypes,
  removePaddingProps
} from '../../style/padding';
import Background, {
  backgroundPropTypes,
  removeBackgroundProps
} from '../../style/background/macOs';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes } from '../../style/dimension';

@WindowFocus()
@Alignment()
@Hidden()
@Dimension({ width: '100vw', height: '100vh' })
class Window extends Component {
  static propTypes = {
    ...paddingPropTypes,
    ...backgroundPropTypes,
    ...alignmentPropTypes,
    ...hiddenPropTypes,
    ...dimensionPropTypes,
    chrome: PropTypes.bool
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
    let { style, chrome, isWindowFocused, ...props } = this.props;

    let componentStyle = { ...styles.window, ...style };
    if (chrome) {
      componentStyle = {
        ...componentStyle,
        ...styles.chrome
      };

      if (!isWindowFocused) {
        componentStyle = { ...componentStyle, ...styles.unfocused };
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

    let content = Background(
      Padding(<View style={contentStyle}>{children}</View>, props),
      props
    );
    props = removePaddingProps(props);
    props = removeBackgroundProps(props);

    return (
      <div style={componentStyle} {...props}>
        {titleBar}
        {content}
      </div>
    );
  }
}

export default Window;
