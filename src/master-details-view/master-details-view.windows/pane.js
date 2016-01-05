import React, { Component, Children, PropTypes } from 'react';
import DesktopComponent from '../../desktop-component';
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
    background: 'black'
  }
};

@DesktopComponent
class Pane extends Component {
  static contextTypes = {
    masterWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    const { children, style, selected, ...props } = this.props;

    let componentStyle = { ...styles.pane, ...style };

    if (this.context.masterWidth) {
      componentStyle.width = parseDimension(this.context.masterWidth);
      componentStyle.flex = '0 0 ' + parseDimension(this.context.masterWidth);
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
