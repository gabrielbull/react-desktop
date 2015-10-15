import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from './Styling';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande"',
    fontSize: '13px'
  }
};

class Label extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    color: PropTypes.string
  };

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { children, style, color, ...props } = this.props;

    let styles = this.styles;
    if (color) {
      switch (color) {
      case 'red': color = '#fd2700'; break;
      }
      styles = mergeStyles(styles, { color: color });
    }

    return (
      <div ref="label" {...props} style={applyStyle(styles)}>
        {children}
      </div>
    );
  }
}

export default Label;
