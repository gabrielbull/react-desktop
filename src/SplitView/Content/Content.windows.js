import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../DesktopComponent';

@DesktopComponent
class Content extends Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <div {...props}>
        {children}
      </div>
    );
  }
}

export default Content;
