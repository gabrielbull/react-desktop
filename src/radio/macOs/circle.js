import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import styles from './styles/10.11';

@Radium
class Circle extends Component {
  static propTypes = {
    show: PropTypes.bool,
    color: PropTypes.string,
    shadowColor: PropTypes.string
  };

  static defaultProps = {
    color: '#FFFFFF'
  };

  render() {
    const { color, shadowColor } = this.props;
    let style = { ...styles.checkmark };
    style.opacity = '0';
    style.transform = 'scale(2)';
    style.transition = 'opacity 0s, transform 0.2s';

    if (this.props.show) {
      style.opacity = '1';
      style.transform = 'scale(1)';
    }

    return (
      <div style={style}>
        <svg viewBox="0 0 285 285" style={styles.svg}>
          <circle fill={color} cx="142.5" cy="142.5" r="142.5"/>
        </svg>
        <svg viewBox="0 0 285 285" style={styles.svgShadow}>
          <circle fill={shadowColor} cx="142.5" cy="142.5" r="142.5"/>
        </svg>
      </div>
    );
  }
}

export default Circle;
