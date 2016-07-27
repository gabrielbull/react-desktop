import React, { Component, PropTypes } from 'react';
import './warning.scss';

class Warning extends Component {
  constructor() {
    super();

    this.state = {
      closed: localStorage['warning-closed'] ? true : false
    };
  }

  close = () => {
    localStorage['warning-closed'] = true;
    this.setState({ closed: true });
  };

  render() {
    if (this.state.closed) {
      return null;
    }

    return (
      <div className="warning">
        <div>
          Because this library is being currently built for Electron and NW.js, the examples and demos on this site
          will only work properly in Chrome.
        </div>
        <a onClick={this.close}>
          <svg x="0px" y="0px" width="12px" height="12px" viewBox="0 0 12 12">
            <path d="M8.2,6l3.7-3.7c0.2-0.2,0.2-0.6,0-0.9l-1.3-1.3
              c-0.2-0.2-0.6-0.2-0.9,0L6,3.8L2.3,0.2c-0.2-0.2-0.6-0.2-0.9,0L0.2,1.5c-0.2,0.2-0.2,0.6,0,0.9L3.8,6L0.2,9.7
              c-0.2,0.2-0.2,0.6,0,0.9l1.3,1.3c0.2,0.2,0.6,0.2,0.9,0L6,8.2l3.7,3.7c0.2,0.2,0.6,0.2,0.9,0l1.3-1.3c0.2-0.2,0.2-0.6,0-0.9L8.2,6z"
              />
          </svg>
        </a>
      </div>
    );
  }
}

export default Warning;
