import React, { Component, PropTypes } from 'react';

class Example extends Component {
  render() {
    return (
      <div className="example">
        <h4>Demo</h4>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Example;
