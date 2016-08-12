import React, { Component, PropTypes } from 'react';

class Footer extends Component {
  render() {
    const { ...props } = this.props;

    return (
      <div {...props}>
        hello world
      </div>
    );
  }
}

export default Footer;
