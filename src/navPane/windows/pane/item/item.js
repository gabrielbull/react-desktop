import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../../../desktopComponent';
import styles from '../style/windows10';
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

  render() {
    const { title, icon, selected, onSelect, push, isPaneExpanded } = this.props;

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

    if (push) {
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
        onClick={onSelect}
        style={componentStyle}
      >
        <span
          ref="span"
          style={spanStyle}
        >
          {icon ? <i style={styles.anchorIcon}>{icon}</i> : null}
          {isPaneExpanded ? <span style={styles.anchorTitle}>{title}</span> : null}
        </span>
      </a>
    );
  }
}

export default Item;
