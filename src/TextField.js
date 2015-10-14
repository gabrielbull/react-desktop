import React, { Component, PropTypes } from 'react';
import Styling from './Styling';

var styles = {
  osx_10_11: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#b0b0b0',
    borderLeftColor: '#b1b1b1',
    borderRightColor: '#b1b1b1',
    boxShadow: 'inset 0 0 0 1px #f0f0f0',
    paddingTop: '4px',
    paddingBottom: '1px',
    paddingLeft: '3.5px',
    paddingRight: '3.5px',
    lineHeight: '14px',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande"',
    fontSize: '13px',

    ':focus': {
      outline: 'none',
      boxShadow: '0 0 0 3.5px #93c2f3'
    },

    ':placeholder': {
      color: '#c0c0c0'
    }
  }
};

@Styling
class TextField extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  get styles() {
    return styles.osx_10_11;
  };

  render() {
    const { style, ...props } = this.props;

    let styles = this.styles;
    if (style) {
      styles = Object.assign({}, this.styles, style);
    }

    return (
      <input
        ref="element"
        type="text"
        style={styles}
        {...props}
      />
    );
  }
}

export default TextField;
