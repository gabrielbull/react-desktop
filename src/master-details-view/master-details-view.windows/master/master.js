import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../../desktop-component';
import { parseDimension } from '../../../dimension';
import { convertColor, hexToRgb } from '../../../color';

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
class Master extends Component {
  static propTypes = {
    selected: PropTypes.bool
  };

  static contextTypes = {
    id: PropTypes.string,
    masterWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    push: PropTypes.bool,
    masterDetails: PropTypes.object
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      selected: props.selected || false
    };
  };

  select = () => {
    this.context.masterDetails.select(this.props.index);
  };

  render() {
    const { children, style, selected, item, ...props } = this.props;
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

    if (this.state.selected) {
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
