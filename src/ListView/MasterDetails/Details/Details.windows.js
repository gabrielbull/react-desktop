import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../../DesktopComponent';
import { convertColor } from '../../../Color';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class Content extends Component {
  static propTypes = {
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  };

  getChildContext() {
    return {
      background: typeof this.props.background === 'string' ? this.props.background : this.context.color
    };
  }

  render() {
    const { children, style, background, ...props } = this.props;
    let componentStyle = { ...styles, ...style };

    if (background === true) {
      componentStyle.backgroundColor = convertColor(this.context.color);
    } else if (typeof background === 'string') {
      componentStyle.backgroundColor = convertColor(background);
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

export default Content;
