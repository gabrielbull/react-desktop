import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../../DesktopComponent';

const styles = {
  item: {
    display: 'block',
    color: '#ffffff',
    lineHeight: '44px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    backgroundColor: '#2e2e2e',
    letterSpacing: '0.4pt',
    padding: '0 18px'
  }
};

@DesktopComponent
class Item extends Component {
  render() {
    const { children, style, ...props } = this.props;
    const { title } = children.props;

    let componentStyle = {...styles.item, ...style};

    return (
      <a style={componentStyle} {...props}>
        {title}
      </a>
    );
  }
}

export default Item;
