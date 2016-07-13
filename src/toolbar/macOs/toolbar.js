import React, { Component } from 'react';

var styles = {
  toolbar: {
    WebkitUserSelect: 'none',
    cursor: 'default'
  }
};

class Toolbar extends Component {
  render() {
    const { style, ...props } = this.props;

    return (
      <div style={{ ...styles.toolbar, ...style }} {...props}>
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;
