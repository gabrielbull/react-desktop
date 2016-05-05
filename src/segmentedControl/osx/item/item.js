import React, { Component, PropTypes } from 'react';

class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func
  };

  render() {
    let { children, ...props } = this.props;

    delete props.title;
    delete props.selected;
    delete props.onSelect;

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
