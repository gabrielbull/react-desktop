import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';

var styles = {
  windows_10: {
    WebkitUserSelect: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(171,173,179,1)',
    padding: '2px',
    lineHeight: '23px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '12px',

    ':focus': {
      outline: 'none',
      borderColor: '#1883d7'
    },

    ':hover': {
      borderColor: 'rgba(51,153,255,0.7)'
    },

    ':placeholder': {
      color: '#bbbbbb',
      padding: '2px',
      fontSize: '12px'
    }
  }
};

@Styling
class TextFieldWindows extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = {visible: props.visible !== false, display: props.display !== false};
  }

  get styles() {
    return mergeStyles(styles.windows_10, this.props.style);
  }

  render() {
    const { form, style, visible, display, ...props } = this.props;

    let styles = this.styles;
    if (!this.state.visible) {
      styles = mergeStyles(styles, {visibility: 'hidden'});
    } else {
      styles = mergeStyles(styles, {visibility: 'visible'});
    }

    if (!this.state.display) {
      styles = mergeStyles(styles, {display: 'none'});
    } else {
      styles = mergeStyles(styles, {display: 'block'});
    }

    return (
      <input
        ref="element"
        type="text"
        {...props}
        style={applyStyle(styles)}
      />
    );
  }
}

export default TextFieldWindows;
