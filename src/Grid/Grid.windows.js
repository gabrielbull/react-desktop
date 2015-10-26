import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../DesktopComponent';

var styles = {
  grid: {
    userSelect: 'none',
    flex: '1',
    display: 'flex'
  }
};

@DesktopComponent
class Grid extends Component {
  static propTypes = {
    margin: PropTypes.string,
    padding: PropTypes.string
  };

  render() {
    const { children, style, ...props } = this.props;

    let componentStyle = {
      ...styles.grid,
      margin: this.props.margin,
      padding: this.props.padding,
      ...style
    };

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Grid;
