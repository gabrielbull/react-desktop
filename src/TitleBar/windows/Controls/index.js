import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Close from './Close';
import Minimize from './Minimize';
import Maximize from './Maximize';

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    height: '32px'
  }
};

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
        <Minimize onClick={this.props.onMinimizeClick} ref="minimize" />
        <Maximize
          onMaximizeClick={this.props.onMaximizeClick}
          onRestoreDownClick={this.props.onRestoreDownClick}
          ref="maximize"
        />
        <Close onClick={this.props.onCloseClick} ref="close" />
      </div>
    );
  }
}

export default Controls;
