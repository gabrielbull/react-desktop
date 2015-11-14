import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../../DesktopComponent';
import { parseDimension } from '../../../Dimension';
import { convertColor, hexToRgb } from '../../../Color';

const styles = {
  master: {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    width: '320px',
    boxSizing: 'border-box',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, .1)'
    },
    ':active': {
      backgroundColor: 'rgba(0, 0, 0, .2)'
    }
  },

  masterSpan: {
    padding: '0 12px',
    lineHeight: '50px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '18px',
    color: '#000000',
    width: '320px',
    boxSizing: 'border-box',

    transition: 'transform .1s ease-in',
    ':hover': {
      transition: 'transform .1s ease-in'
    }
  },

  masterSpanWithPush: {
    ':active': {
      transform: 'scale(0.97)',
      transition: 'transform 0s ease-in'
    }
  }
};

@DesktopComponent
class Content extends Component {
  static propTypes = {
    selected: PropTypes.bool
  };

  static contextTypes = {
    id: PropTypes.string,
    masterWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    push: PropTypes.bool
  };

  render() {
    const { children, style, selected, ...props } = this.props;
    let componentStyle = { ...styles.master, ...style };
    let spanStyle = { ...styles.masterSpan };

    if (this.context.masterWidth) {
      componentStyle.width = parseDimension(this.context.masterWidth);
      spanStyle.width = parseDimension(this.context.masterWidth);
    }

    if (this.context.push) {
      spanStyle[':active'] = {
        ...spanStyle[':active'],
        ...styles.masterSpanWithPush[':active']
      }
    }

    if (selected) {
      const c = hexToRgb(convertColor(this.context.color));
      componentStyle = {
        ...componentStyle,
        backgroundColor: `rgba(${c.r}, ${c.g}, ${c.b}, .5)`
      };
      spanStyle = {
        ...spanStyle,
        color: 'white'
      }
    }

    return (
      <div
        style={componentStyle}
        {...props}
      >
        <span key="span" style={spanStyle}>
          {children}
        </span>
      </div>
    );
  }
}

export default Content;
