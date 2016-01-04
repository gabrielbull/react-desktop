import React, { Component, PropTypes } from 'react';
import Close from './Close';
import Minimize from './Minimize';
import Resize from './Resize';

var styles = {
  controls: {
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

  mouseEnter = () => {
    for (let prop in this.refs) {
      if(this.refs.hasOwnProperty(prop)) {
        this.refs[prop].setState({ iconVisible: true });
      }
    }
  }

  mouseLeave = () => {
    for (let prop in this.refs) {
      if(this.refs.hasOwnProperty(prop)) {
        this.refs[prop].setState({ iconVisible: false });
      }
    }
  }

  render() {
    return (
      <div style={styles.controls} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <Close onClick={this.props.onClosePress} ref="close"/>
        <Minimize onClick={this.props.onMinimizePress} ref="minimize"/>
        <Resize onClick={this.props.onResizePress} ref="resize"/>
      </div>
    );
  }
}

export default Controls;
