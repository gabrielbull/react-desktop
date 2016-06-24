import React, { Component, PropTypes } from 'react';
import Close from './close';
import Minimize from './minimize';
import Resize from './resize';

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    width: '61px'
  }
};

class Controls extends Component {
  static propTypes = {
    isFullscreen: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onMaximizeClick: PropTypes.func,
    onResizeClick: PropTypes.func
  };

  mouseEnter = () => {
    for (let prop in this.refs) {
      if(this.refs.hasOwnProperty(prop)) {
        this.refs[prop].setState({ iconVisible: true });
      }
    }
  };

  mouseLeave = () => {
    for (let prop in this.refs) {
      if(this.refs.hasOwnProperty(prop)) {
        this.refs[prop].setState({ iconVisible: false });
      }
    }
  };

  render() {
    return (
      <div style={styles.controls} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <Close onClick={this.props.onCloseClick} ref="close"/>
        <Minimize onClick={this.props.onMinimizeClick} ref="minimize"/>
        <Resize
          isFullscreen={this.props.isFullscreen}
          onClick={this.props.onResizeClick}
          onMaximizeClick={this.props.onMaximizeClick}
          ref="resize"
        />
      </div>
    );
  }
}

export default Controls;
