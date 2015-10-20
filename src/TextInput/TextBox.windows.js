import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';

var styles = {
  textBox: {
    userSelect: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(148, 148, 148, 1)',
    padding: '2px 10px 3px 10px',
    lineHeight: '23px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    fontWeight: '100',
    color: '#000000',
    backgroundColor: 'rgba(255, 255, 255, .35)',

    ':hover': {
      borderColor: 'rgba(100, 100, 100, 1)',
      backgroundColor: 'rgba(255, 255, 255, .5)'
    },

    ':focus': {
      outline: 'none',
      borderColor: 'rgba(0, 120, 215, 1)',
      backgroundColor: 'rgba(255, 255, 255, 1)'
    },

    ':placeholder': {
      color: '#636363'
    }
  }
};

@Styling
class TextBoxWindows extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool,
    header: PropTypes.string
  };

  constructor(props) {
    super();
    this.state = {visible: props.visible !== false, display: props.display !== false};
  }

  render() {
    const { header, form, style, visible, display, ...props } = this.props;
    const componentStyle = mergeStyles(style, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    const input = (
      <input
        type="text"
        data-style={applyStyle(styles.textBox)}
        style={componentStyle}
        {...props}
      />
    );

    if (header) {
      return (
        <div>
          {input}
        </div>
      );
    }
    return input;
  }
}

export default TextBoxWindows;
