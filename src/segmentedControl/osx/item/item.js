import React, { Component, PropTypes } from 'react';

class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func
  };

  render() {
    const { children, ...props } = this.props;

    return (
      <div
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Item;
