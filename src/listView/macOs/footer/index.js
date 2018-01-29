import React, { Component } from 'react';
import Background, { backgroundPropTypes } from '../../../style/background/macOs';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';
import Padding, { paddingPropTypes } from '../../../style/padding';
import styles from './style/10.11';

@Background({ background: '#f0f0f0' })
@Dimension()
@Padding({ paddingLeft: '10px', paddingRight: '10px', paddingTop: '2px', paddingBottom: '2px' })
class Footer extends Component {
  static propTypes = {
    ...backgroundPropTypes,
    ...dimensionPropTypes,
    ...paddingPropTypes
  };

  render() {
    const { children, style, ...props } = this.props;

    return (
      <footer style={{ ...styles.header, ...style }} {...props}>
        {children}
      </footer>
    );
  }
}

export default Footer;
