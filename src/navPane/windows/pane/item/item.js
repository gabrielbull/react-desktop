import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../../../desktopComponent';
import Icon from './icon';
import { transparentize } from '../../../../color';

const styles = {
  anchor: {
    display: 'flex',
    alignItems: 'center',
    height: '44px',

    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, .1)',
    },
    ':active': {
      backgroundColor: 'rgba(0, 0, 0, .2)',
    }
  },

  anchorDark: {
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
    onClick: PropTypes.func
  };

  static contextTypes = {
    push: PropTypes.bool
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      isOpen: this.props.isOpen,
      selected: this.props.children.props.selected
    };
  }

  get pane() {
    return this.context.parent;
  }

  onClick = () => {
    this.pane.selectItem(this);
    this.pane.splitView.selectItem(this.props.children);

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const { children, style, onClick, isOpen, ...props } = this.props;
    const title = this.state.isOpen ? children.props.title : null;
    const ItemIcon = children.props.icon;
    let anchorStyle = { ...styles.anchor, ...style };
    let spanStyle = { ...styles.span, ...style };

    if (this.state.theme === 'dark') {
      spanStyle = { ...spanStyle, ...styles.spanDark };
    }

    if (this.state.selected) {
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
        onClick={this.onClick}
        style={anchorStyle}
        {...props}
      >
        <span
          ref="span"
          style={spanStyle}
        >
          {ItemIcon ? <Icon hasMargin={this.state.isOpen} icon={ItemIcon}/> : null}
          {title}
        </span>
      </a>
    );
  }
}

export default Item;
