import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Padding, Margin, Background, Alignment } from '../../../../desktopComponent';
import styles from '../../style/windows10';

@DesktopComponent(Padding, Margin, Background, Alignment)
class Content extends Component {
  static propTypes = {
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
