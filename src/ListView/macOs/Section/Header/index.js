import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style/10.11';
import Text from '../../../../Text/macOs';
import Margin, {
  marginPropTypes,
  removeMarginProps
} from '../../../../style/margin';
import Padding, {
  paddingPropTypes,
  removePaddingProps
} from '../../../../style/padding';
import { fontSizePropTypes } from '../../../../style/fontSize';
import mapStyles from '../../../../utils/mapStyles';

class Header extends Component {
  static propTypes = {
    ...marginPropTypes,
    ...paddingPropTypes,
    ...fontSizePropTypes,
    color: PropTypes.string,
    bold: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ])
  };

  static defaultProps = {
    color: '#5a5b5c',
    bold: true,
    size: '10'
  };

  static mapStyles = {
    text: ['color', 'fontSize', 'fontWeight', 'lineHeight', 'fontFamily']
  };

  render() {
    let { color, bold, size, children, style, ...props } = this.props;

    props = removePaddingProps(removeMarginProps(props));

    let [headerStyle, textStyle] = mapStyles(style, Header.mapStyles);

    return (
      <header {...props} style={headerStyle}>
        {Padding(
          Margin(
            <h2 style={styles.title}>
              <Text color={color} size={size} bold={bold} style={textStyle}>
                {children}
              </Text>
            </h2>,
            this.props
          ),
          this.props
        )}
      </header>
    );
  }
}

export default Header;
