import React, { Component, PropTypes } from 'react';

/*var styles = {
  item: {
    WebkitUserSelect: 'none',
    cursor: 'default',
  }
};*/

class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    selected: PropTypes.bool
  };

  render() {
    const { title, children, selected, ...props } = this.props;

    return (
      <div
        //style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Item;
