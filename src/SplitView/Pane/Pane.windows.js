import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../DesktopComponent';

const styles = {
  pane: {
    width: '20%'
  }
};

@DesktopComponent
class Pane extends Component {
  static propTypes = {
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool
  };

  render() {
    let { children, style, ...props } = this.props;
    return (
      <div
        style={{...styles.pane, ...style}}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Pane;
