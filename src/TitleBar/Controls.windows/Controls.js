import React, { Component, PropTypes } from 'react';
import Close from './Close';
import Minimize from './Minimize';
import Maximize from './Maximize';

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    height: '32px'
  }
};

class Controls extends Component {
  static propTypes = {
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onMaximizePress: PropTypes.func
  };

  static childContextTypes = {
    theme: PropTypes.string
  };

  static contextTypes = {
    theme: PropTypes.string
  };

  getChildContext() {
    return {
      theme: this.context.theme
    };
  }

  render() {
    return (
      <div style={styles.controls}>
        <Minimize onClick={this.props.onMinimizePress} ref="minimize"/>
        <Maximize onClick={this.props.onMaximizePress} ref="maximize"/>
        <Close onClick={this.props.onClosePress} ref="close"/>
      </div>
    );
  }
}

export default Controls;
