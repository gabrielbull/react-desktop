import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../style/10.11';
import WindowFocus from '../../../windowFocus';
import Radium from 'radium';

@WindowFocus()
@Radium
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
    let { children, style, onSelect, afterSelected, prevSelected, lastChild, firstChild, isWindowFocused } = this.props;

    let componentStyle = { ...styles.tab, ...style };

    if (firstChild) componentStyle = { ...componentStyle, ...styles.firstChild };
    if (lastChild) componentStyle = { ...componentStyle, ...styles.lastChild };

    if (prevSelected) componentStyle = { ...componentStyle, ...styles.prevSelected };
    if (afterSelected) componentStyle = { ...componentStyle, ...styles.afterSelected };

    if (this.props.selected) {
      componentStyle = { ...componentStyle, ...styles.selected };
      if (!isWindowFocused) componentStyle = { ...componentStyle, ...styles.selectedUnfocused };
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
