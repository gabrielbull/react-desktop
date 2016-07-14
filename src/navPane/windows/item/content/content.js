import React, { Component, PropTypes } from 'react';
import Padding, { paddingPropTypes } from '../../../../style/padding';
import Margin, { marginPropTypes } from '../../../../style/margin';
import Background, { windowsBackgroundPropTypes } from '../../../../style/background';
import Alignment, { alignmentPropTypes } from '../../../../style/alignment';
import styles from '../../style/windows10';

@Padding()
@Margin()
@Background()
@Alignment()
class Content extends Component {
  static propTypes = {
    ...paddingPropTypes,
    ...marginPropTypes,
    ...windowsBackgroundPropTypes,
    ...alignmentPropTypes,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
  };

  render() {
    const { content, style, ...props } = this.props;

    return (
      <div
        style={{ ...styles.content, ...style }}
        {...props}
      >
        {content}
      </div>
    );
  }
}

export default Content;
