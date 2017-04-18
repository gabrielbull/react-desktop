import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../../style/hidden';
import Margin, { marginPropTypes } from '../../../style/margin';
import Padding, { paddingPropTypes } from '../../../style/padding';
import styles from './style/10.11';

@Dimension()
@Hidden()
@Margin({ marginLeft: '10px', marginRight: '10px', marginTop: '4px', marginBottom: '4px' })
@Padding()
class Separator extends Component {
  static propTypes = {
    ...dimensionPropTypes,
    ...hiddenPropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
    color: PropTypes.string,
  };

  static defaultProps = {
    color: '#e5e5e5'
  };

  render() {
    const { style, ...props } = this.props;

    return (
      <hr style={{ ...styles.separator, ...style }} {...props}/>
    );
  }
}

export default Separator;
