import React, { Component } from 'react';
import DesktopComponent from '../../desktopComponent';
import { parseDimension } from '../../dimension';

const styles = {
  pane: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    position: 'relative',
    flex: '0 0 320px',
    width: '320px'
  },

  paneDark: {
  }
};

@DesktopComponent
class Pane extends Component {
  render() {
    const { children, style, ...props } = this.props;

    let componentStyle = { ...styles.pane, ...style };

    if (this.props.width) {
      componentStyle.width = parseDimension(this.props.width);
      componentStyle.flex = '0 0 ' + parseDimension(this.props.width);
    }

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.paneDark };
    }

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

export default Pane;
