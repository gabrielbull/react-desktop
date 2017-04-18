import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parseDimension } from '../../../styleHelper';
import { convertColor, hexToRgb } from '../../../color';
import { ColorContext, colorPropTypes, colorContextTypes } from '../../../style/color/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../../style/theme/windows';
import Radium from 'radium';

const styles = {
  master: {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    width: '320px',
    boxSizing: 'border-box',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, .1)'
    },
    ':active': {
      backgroundColor: 'rgba(0, 0, 0, .2)'
    }
  },

  masterDark: {
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, .1)'
    },
    ':active': {
      backgroundColor: 'rgba(255, 255, 255, .2)'
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

  masterSpanDark: {
    color: 'white'
  },

  masterSpanWithPush: {
    ':active': {
      transform: 'scale(0.97)',
      transition: 'transform 0s ease-in'
    }
  }
};

@ColorContext()
@ThemeContext()
@Radium
class Master extends Component {
  static propTypes = {
    ...colorPropTypes,
    ...themePropTypes,
    selected: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    push: PropTypes.bool
  };

  static contextTypes = {
    ...colorContextTypes,
    ...themeContextTypes,
    id: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    push: PropTypes.bool,
    masterDetails: PropTypes.object
  };

  select = () => {
    this.context.masterDetails.select(this.props.index);
  };

  render() {
    const { children, style, selected, push, ...props } = this.props;
    delete props.index;
    let componentStyle = { ...styles.master, ...style };
    let spanStyle = { ...styles.masterSpan };

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.masterDark };
      spanStyle = { ...spanStyle, ...styles.masterSpanDark };
    }

    if (this.props.width) {
      componentStyle.width = parseDimension(this.props.width);
      spanStyle.width = parseDimension(this.props.width);
    }

    if (push) {
      spanStyle[':active'] = {
        ...spanStyle[':active'],
        ...styles.masterSpanWithPush[':active']
      }
    }

    if (selected) {
      const c = hexToRgb(convertColor(this.context.color));
      componentStyle = {
        ...componentStyle,
        backgroundColor: `rgba(${c.r}, ${c.g}, ${c.b}, .4)`,
        ':hover': {
          ...componentStyle[':hover'],
          backgroundColor: `rgba(${c.r}, ${c.g}, ${c.b}, .6)`
        },
        ':active': {
          ...componentStyle[':active'],
          backgroundColor: `rgba(${c.r}, ${c.g}, ${c.b}, .7)`
        }
      };
    }

    return (
      <div
        style={componentStyle}
        onClick={this.select}
        {...props}
      >
        <span key="span" style={spanStyle}>
          {children}
        </span>
      </div>
    );
  }
}

export default Master;
