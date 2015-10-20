import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';

var styles = {
  textField: {
    WebkitUserSelect: 'none',
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
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
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
class TextFieldOSX extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  render() {
    const { form, style, visible, display, ...props } = this.props;
    const componentStyle = mergeStyles(this.styles, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <input
        ref="element"
        type="text"
        data-style={applyStyle(styles.textField)}
        style={componentStyle}
        {...props}
      />
    );
  }
}

export default TextFieldOSX;
