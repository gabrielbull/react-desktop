import React, { Component, PropTypes } from 'react';
import styles from '../style/style10_11';
import DesktopComponent, { WindowFocus } from '../../../desktopComponent';

@DesktopComponent(WindowFocus)
class Tab extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    prevSelected: PropTypes.bool,
    afterSelected: PropTypes.bool,
    firstChild: PropTypes.bool,
    lastChild: PropTypes.bool,
    onSelect: PropTypes.func
  };

  render() {
    let { children, style, onSelect, afterSelected, prevSelected, lastChild, firstChild } = this.props;

    let componentStyle = { ...styles.tab, ...style };

    if (firstChild) componentStyle = { ...componentStyle, ...styles.firstChild };
    if (lastChild) componentStyle = { ...componentStyle, ...styles.lastChild };

    if (prevSelected) componentStyle = { ...componentStyle, ...styles.prevSelected };
    if (afterSelected) componentStyle = { ...componentStyle, ...styles.afterSelected };

    if (this.props.selected) {
      componentStyle = { ...componentStyle, ...styles.selected };
      if (!this.state.windowFocused) componentStyle = { ...componentStyle, ...styles.selectedUnfocused };
      if (firstChild) componentStyle = { ...componentStyle, ...styles.firstChildSelected };
      if (lastChild) componentStyle = { ...componentStyle, ...styles.lastChildSelected };
    }

    return (
      <div
        onClick={onSelect}
        style={componentStyle}
      >
        {children}
      </div>
    );
  }
}

export default Tab;
