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
    style: PropTypes.object
  };

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div ref="label" {...props} style={applyStyle(this.styles)}>
        {children}
      </div>
    );
  }
}

export default Label;
