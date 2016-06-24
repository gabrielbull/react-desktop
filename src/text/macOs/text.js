import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Alignment, Background } from '../../desktopComponent';
import Margin from '../../style/margin';
import Padding from '../../style/padding';
import FontSize from '../../style/fontSize';
import Dimension from '../../style/dimension';
import TextAlign from '../../style/textAlign';
import Hidden from '../../style/hidden';
import styles from './styles/10.11';

@Margin @Padding @FontSize @Dimension @TextAlign @Hidden
@DesktopComponent(Alignment, Background)
class Text extends Component {
  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: '#000000'
  };

  render() {
    const { color, children, style, ...props } = this.props;

    return (
      <div style={{ ...styles.text, color, ...style }} {...props}>
        {children}
      </div>
    );

  }
}

export default Text;
