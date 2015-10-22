import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../../DesktopComponent';
import Icon from './Icon.windows';
import { transparentize } from '../../../Color';

const styles = {
  anchor: {
    display: 'flex',
    alignItems: 'center',

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, .1)',
    },

    ':active': {
      backgroundColor: 'rgba(255, 255, 255, .2)',
    }
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    lineHeight: '44px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    letterSpacing: '0.4pt',
    padding: '0 16px',
    transition: 'transform .1s ease-in'
  },

  spanDark: {
    color: '#ffffff',
  },

  pushTransformHover: {
    transition: 'transform .1s ease-in'
  },

  pushTransformActive: {
    transform: 'scale(0.97)',
    transition: 'transform 0s ease-in'
  }
};

@DesktopComponent
class Item extends Component {
  static propTypes = {
    onPress: PropTypes.func
  };

  static contextTypes = {
    push: PropTypes.bool
  };

  render() {
    const { children, style, onPress, ...props } = this.props;
    const title = children.props.title;
    const selected = children.props.selected;
    const ItemIcon = children.props.icon;
    let anchorStyle = {...styles.anchor, ...style};
    let spanStyle = {...styles.span, ...style};

    if (this.state.requestedTheme === 'dark') {
      spanStyle = {...spanStyle, ...styles.spanDark};
    }

    if (selected) {
      anchorStyle = {
        ...anchorStyle,
        backgroundColor: transparentize(this.state.color, .4),
        ':hover': {
          ...anchorStyle[':hover'],
          backgroundColor: transparentize(this.state.color, .2)
        },
        ':active': {
          ...anchorStyle[':active'],
          backgroundColor: transparentize(this.state.color, .1)
        }
      };
    }

    if (this.context.push) {
      spanStyle[':hover'] = {
        ...spanStyle[':hover'],
        ...styles.pushTransformHover
      };
      spanStyle[':active'] = {
        ...spanStyle[':active'],
        ...styles.pushTransformActive
      };
    }

    return (
      <a
        ref="anchor"
        onClick={onPress}
        style={anchorStyle}
        {...props}
      >
        <span
          ref="span"
          style={spanStyle}
        >
          <Icon icon={ItemIcon}/>
          {title}
        </span>
      </a>
    );
  }
}

export default Item;
