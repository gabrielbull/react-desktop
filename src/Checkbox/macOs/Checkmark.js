import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import styles from './styles/10.11';

@Radium
class Checkmark extends Component {
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
    style.transform = 'scale(0)';
    style.transition = 'all 0.5s';

    if (this.props.show) {
      style.opacity = '1';
      style.transform = 'scale(1)';
    }

    return (
      <div style={style}>
        <svg viewBox="0 0 285 283.4" style={styles.svg}>
          <path
            fill={color}
            d="M101.2,215.7L227.5,20.6c0,0,20.7-31.9,44.4-16.2c25.4,16.8,6.1,41,6.1,41L134.5,271.9c0,0-8.8,11.5-23.9,11.5
  s-29.2-13.3-29.2-13.3L2.7,175.4c0,0-9.4-17.3,6.8-27.4c19.7-12.3,34.6,2.8,34.6,2.8L101.2,215.7z"
          />
        </svg>
        <svg viewBox="0 0 285 283.4" style={styles.svgShadow}>
          <path
            fill={shadowColor}
            d="M101.2,215.7L227.5,20.6c0,0,20.7-31.9,44.4-16.2c25.4,16.8,6.1,41,6.1,41L134.5,271.9c0,0-8.8,11.5-23.9,11.5
  s-29.2-13.3-29.2-13.3L2.7,175.4c0,0-9.4-17.3,6.8-27.4c19.7-12.3,34.6,2.8,34.6,2.8L101.2,215.7z"
          />
        </svg>
      </div>
    );
  }
}

export default Checkmark;
