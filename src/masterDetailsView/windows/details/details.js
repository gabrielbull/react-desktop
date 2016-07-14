import React, { Component, PropTypes } from 'react';
import { convertColor } from '../../../color';
import { colorContextTypes } from '../../../style/color';

const styles = {
  details: {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    flex: '1'
  }
};

class Details extends Component {
  static contextTypes = {
    ...colorContextTypes
  };

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
    let componentStyle = { ...styles.details, ...style };

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

export default Details;
