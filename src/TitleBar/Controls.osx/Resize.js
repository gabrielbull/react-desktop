import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../../Styling';
import WindowState from '../../WindowState';

var styles = {
  button: {
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'no-drag',
    cursor: 'default',
    width: '10px',
    height: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50%',
    marginBottom: '.5px',
    marginLeft: '4px',
    marginRight: '4px',
    lineHeight: 0,
    backgroundColor: '#28c940',
    borderColor: '#12ac28',

    ':active': {
      backgroundColor: '#1f9a31',
      borderColor: '#128622'
    }
  },

  unfocused: {
    backgroundColor: '#dddddd',
    borderColor: '#d0d0d0'
  },

  icon: {
    width: '6px',
    height: '6px',
    marginTop: '2px',
    marginLeft: '2px'
  }
};

@WindowState
@Styling
class Resize extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor() {
    super();
    this.state = { iconVisible: false, windowFocused: true };
  }

  render() {
    const { style, ...props } = this.props;
    const displayIcon = this.state.iconVisible ? { opacity: 1 } : { opacity: 0 };
    const iconStyle = mergeStyles(styles.icon, displayIcon);

    let componentStyle = style;
    if (!this.state.windowFocused && !this.state.iconVisible) {
      componentStyle = mergeStyles(componentStyle, styles.unfocused)
    }

    return (
      <a
        data-style={applyStyle(styles.button)}
        style={componentStyle}
        {...props}
      >
        <svg x="0px" y="0px" viewBox="0 0 6 5.9" style={iconStyle}>
          <path fill="#006400" d="M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z"/>
          <path fill="#006400" d="M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z"/>
        </svg>
      </a>
    );
  }
}

export default Resize;
