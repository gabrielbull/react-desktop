import React, { Component, PropTypes } from 'react';
import Styling, { applyStyle } from '../../Styling';
import WindowState from '../../WindowState';

const styles = {
  button: {
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'no-drag',
    cursor: 'default',
    width: '46px',
    height: '100%',
    lineHeight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    ':hover': {
      transition: 'background-color 0.1s',
      backgroundColor: '#e81123',

      polygon: {
        fill: '#ffffff'
      }
    },

    ':active': {
      backgroundColor: '#f1707a',


      polygon: {
        fill: '#000000'
      }
    }
  },

  icon: {
    width: '10px',
    height: '10px'
  }
};

@WindowState
@Styling
class Close extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor() {
    super();
    this.state = {windowFocused: true};
  }

  render() {
    const { style, ...props } = this.props;

    let svgFill = '#000000';
    if (!this.state.windowFocused) {
      svgFill = 'rgba(0, 0, 0, .4)';
    }

    return (
      <a
        data-style={applyStyle(styles.button)}
        style={style}
        {...props}
      >
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" style={styles.icon}>
          <polygon
            fill={svgFill}
            points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "
          />
        </svg>
      </a>
    );
  }
}

export default Close;
