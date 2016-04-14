import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../../desktop-component';
import Close from './close';
import Minimize from './minimize';
import Maximize from './maximize';

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    height: '32px'
  }
};

@DesktopComponent
class Controls extends Component {
  static propTypes = {
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onRestoreDownClick: PropTypes.func,
    onMaximizeClick: PropTypes.func
  };

  render() {
    return (
      <div style={styles.controls}>
        <Minimize onClick={this.props.onMinimizeClick} ref="minimize"/>
        <Maximize onMaximizeClick={this.props.onMaximizeClick} onRestoreDownClick={this.props.onRestoreDownClick} ref="maximize"/>
        <Close onClick={this.props.onCloseClick} ref="close"/>
      </div>
    );
  }
}

export default Controls;
