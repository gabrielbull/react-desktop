import React, { Component, PropTypes } from 'react';
import TextBlockWindows from '../TextBlock/TextBlock.windows';
import DesktopComponent from '../DesktopComponent';

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
    }
  },

  ':placeholder': {
    color: '#636363'
  }
};

@DesktopComponent
class TextBoxWindows extends Component {
  static propTypes = {
    header: PropTypes.string
  };

  static placeHolderSyle = styles[':placeholder'];

  render() {
    const { header, style, visible, display, ...props } = this.props;
    const componentStyle = {
      ...styles.textBox,
      ...style,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    };

    const input = (
      <input
        ref="input"
        type="text"
        placeholderStyle={styles[':placeholder']}
        style={componentStyle}
        {...props}
      />
    );

    if (header) {
      return (
        <div>
          <TextBlockWindows style={{marginBottom: '5px'}}>
            {header}
          </TextBlockWindows>
          {input}
        </div>
      );
    }
    return input;
  }
}

export default TextBoxWindows;
