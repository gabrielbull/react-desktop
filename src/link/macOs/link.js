import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import FontSize, { fontSizePropTypes } from '../../style/fontSize';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import TextAlign, { textAlignPropTypes } from '../../style/textAlign';
import Hidden, { hiddenPropTypes } from '../../style/hidden';

const componentStyle = {
  display: 'inline-block',
  WebkitUserSelect: 'none',
  userSelect: 'none',
  cursor: 'default',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
  fontSize: '11px',
  textDecoration: 'none'
};

@Margin()
@Padding()
@FontSize()
@Dimension()
@TextAlign()
@Hidden()
class Link extends Component {
  static propTypes = {
    ...marginPropTypes,
    ...paddingPropTypes,
    ...fontSizePropTypes,
    ...dimensionPropTypes,
    ...textAlignPropTypes,
    ...hiddenPropTypes,
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
