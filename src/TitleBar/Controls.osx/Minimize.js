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
    backgroundColor: '#ffbd2e',
    borderColor: '#e1a116',

    ':active': {
      backgroundColor: '#bf9123',
      borderColor: '#ad7d15'
    }
  },

  unfocused: {
    backgroundColor: '#dddddd',
    borderColor: '#d0d0d0',
  },

  icon: {
    width: '8px',
    height: '8px',
    marginTop: '1px',
    marginLeft: '1px'
  }
};

@WindowState
@Styling
class Minimize extends Component {
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
        <svg x="0px" y="0px" viewBox="0 0 8 1.1" style={iconStyle}>
          <rect fill="#995700" width="8" height="1.1"/>
        </svg>
      </a>
    );
  }
}

export default Minimize;
