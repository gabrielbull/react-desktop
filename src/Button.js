import React, { Component, PropTypes } from 'react';
import Styling from './Styling';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ffffff',
    outline: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    borderTopColor: '#c8c8c8',
    borderBottomColor: '#acacac',
    borderLeftColor: '#c2c2c2',
    borderRightColor: '#c2c2c2',
    boxShadow: '0 1px rgba(0, 0, 0, .039)',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '13px',
    paddingRight: '13px',
    lineHeight: '19px',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande"',
    fontSize: '13px',

    ':active': {
      backgroundImage: '-webkit-linear-gradient(top, #4c98fe 0%,#0564e3 100%)',
      borderTopColor: '#247fff',
      borderBottomColor: '#003ddb',
      borderLeftColor: '#125eed',
      borderRightColor: '#125eed',
      color: 'rgba(255, 255, 255, .9  )'
    }
  }
};

@Styling
class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]).isRequired
  };

  get styles() {
    return styles.osx_10_11;
  };

  render() {
    const { children, ...props } = this.props;

    return (
      <button
        ref="element"
        style={this.styles}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
