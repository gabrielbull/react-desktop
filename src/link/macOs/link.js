import React, { Component, PropTypes } from 'react';
import Margin from '../../style/margin';
import Padding from '../../style/padding';
import FontSize from '../../style/fontSize';
import Dimension from '../../style/dimension';
import TextAlign from '../../style/textAlign';
import Hidden from '../../style/hidden';

const componentStyle = {
  display: 'inline-block',
  WebkitUserSelect: 'none',
  cursor: 'default',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
  fontSize: '11px',
  textDecoration: 'none'
};

@Margin() @Padding() @FontSize() @Dimension() @TextAlign() @Hidden()
class Link extends Component {
  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: '#009df0'
  };

  render() {
    const { color, children, style, ...props } = this.props;

    return (
      <a style={{ ...componentStyle, color, ...style }} {...props}>
        {children}
      </a>
    );
  }
}

export default Link;
