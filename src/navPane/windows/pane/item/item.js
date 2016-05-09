import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../../../desktopComponent';
import styles from '../style/windows10';
import Icon from './icon';
import { transparentize } from '../../../../color';

@DesktopComponent
class Item extends Component {
  static propTypes = {
    isPaneExpanded: PropTypes.bool.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
    push: PropTypes.bool,
    onSelect: PropTypes.func,
    selected: PropTypes.bool
  };

  /*constructor(props, context, updater) {
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
  };*/

  render() {
    const { title, icon, selected, onSelect, isPaneExpanded } = this.props;

    let componentStyle = styles.anchor;
    let spanStyle = styles.span;

    if (this.state.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.anchorDark };
      spanStyle = { ...spanStyle, ...styles.spanDark };
    }

    if (selected) {
      componentStyle = {
        ...componentStyle,
        backgroundColor: transparentize(this.state.color, .4),
        ':hover': {
          ...componentStyle[':hover'],
          backgroundColor: transparentize(this.state.color, .2)
        },
        ':active': {
          ...componentStyle[':active'],
          backgroundColor: transparentize(this.state.color, .1)
        }
      };
    }

    return (
      <a
        onClick={onSelect}
        style={componentStyle}
      >
        <span
          ref="span"
          style={spanStyle}
        >
          {icon}
          {isPaneExpanded ? title : null}
        </span>
      </a>
    );

    /*const { children, style, onClick, isOpen, ...props } = this.props;
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
    );*/
  }
}

export default Item;
