import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from './styles/10.11';

@Radium
class Circle extends Component {
  static propTypes = {
    show: PropTypes.bool,
    shadowColor: PropTypes.string
  };

  render() {
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
          <circle fill="white" cx="142.5" cy="142.5" r="142.5"/>
        </svg>
        <svg viewBox="0 0 285 285" style={styles.svgShadow}>
          <circle fill={this.props.shadowColor} cx="142.5" cy="142.5" r="142.5"/>
        </svg>
      </div>
    );
  }
}

export default Circle;
