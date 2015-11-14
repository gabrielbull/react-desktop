import React, { Component, Children, PropTypes } from 'react';
import DesktopComponent from '../../DesktopComponent';
import { parseDimension } from '../../Dimension';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '0 0 320px',
  width: '320px'
};

@DesktopComponent
class Pane extends Component {
  static contextTypes = {
    masterWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    const { children, style, ...props } = this.props;

    let componentStyle = { ...styles, ...style };

    if (this.context.masterWidth) {
      componentStyle.width = parseDimension(this.context.masterWidth);
      componentStyle.flex = '0 0 ' + parseDimension(this.context.masterWidth);
    }

    let componentChildren = [];
    children.forEach((child, key) => {
      componentChildren = [...componentChildren, <div key={key}>{child}</div>]
    });

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {componentChildren}
      </div>
    );
  }
}

export default Pane;
