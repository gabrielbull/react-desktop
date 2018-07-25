import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Close from './Close';
import Minimize from './Minimize';
import Resize from './Resize';

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    width: '61px'
  },

  inset: {
    marginLeft: '5px'
  }
};

class Controls extends Component {
  static propTypes = {
    inset: PropTypes.bool,
    isFullscreen: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onMaximizeClick: PropTypes.func,
    onResizeClick: PropTypes.func,
    disableClose: PropTypes.bool,
    disableMinimize: PropTypes.bool,
    disableResize: PropTypes.bool,
    disableFullscreen: PropTypes.bool
  };

  constructor() {
    super();
    this.state = {
      isOver: false
    };
  }

  render() {
    return (
      <div
        style={{ ...styles.controls }}
        onMouseEnter={() => this.setState({ isOver: true })}
        onMouseLeave={() => this.setState({ isOver: false })}
      >
        <Close
          onClick={this.props.onCloseClick}
          showIcon={this.state.isOver}
          disabled={this.props.disableClose}
          isWindowFocused={this.props.isWindowFocused}
        />
        <Minimize
          onClick={this.props.onMinimizeClick}
          showIcon={this.state.isOver}
          disabled={this.props.disableMinimize}
          isWindowFocused={this.props.isWindowFocused}
        />
        <Resize
          isFullscreen={this.props.isFullscreen}
          onClick={this.props.onResizeClick}
          onMaximizeClick={this.props.onMaximizeClick}
          showIcon={this.state.isOver}
          disabled={this.props.disableResize}
          disableFullscreen={this.props.disableFullscreen}
          isWindowFocused={this.props.isWindowFocused}
        />
      </div>
    );
  }
}

export default Controls;
