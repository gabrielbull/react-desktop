import React, { Component, PropTypes } from 'react';
import Close from './Close';
import Minimize from './Minimize';
import Maximize from './Maximize';

var styles = {
  windows_10: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    height: '31px'
  }
};

class Controls extends Component {
  static propTypes = {
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onMaximizePress: PropTypes.func
  };

  get styles() {
    return styles.windows_10;
  };

  render() {
    return (
      <div style={this.styles}>
        <Minimize onClick={this.props.onMinimizePress} ref="minimize"/>
        <Maximize onClick={this.props.onMaximizePress} ref="maximize"/>
        <Close onClick={this.props.onClosePress} ref="close"/>
      </div>
    );
  }
}

export default Controls;
