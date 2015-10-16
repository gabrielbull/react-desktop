import React, { Component, PropTypes } from 'react';
import Close from './Close';
import Minimize from './Minimize';
import Resize from './Resize';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    width: '60px'
  }
};

class Controls extends Component {
  static propTypes = {
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onResizePress: PropTypes.func
  };

  get styles() {
    return styles.osx_10_11;
  };

  mouseEnter() {
    for (let prop in this.refs) {
      if(this.refs.hasOwnProperty(prop)) {
        this.refs[prop].mouseEnter();
      }
    }
  }

  mouseLeave() {
    for (let prop in this.refs) {
      if(this.refs.hasOwnProperty(prop)) {
        this.refs[prop].mouseLeave();
      }
    }
  }

  render() {
    return (
      <div style={this.styles} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>
        <Close onClick={this.props.onClosePress} ref="close"/>
        <Minimize onClick={this.props.onMinimizePress} ref="minimize"/>
        <Resize onClick={this.props.onResizePress} ref="resize"/>
      </div>
    );
  }
}

export default Controls;
