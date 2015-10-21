import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../DesktopComponent';

var styles = {
  checkbox: {
    WebkitUserSelect: 'none',
    WebkitAppearance: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(171,173,179,1)',
    padding: '8px',
    color: '#fff',
    verticalAlign: 'bottom',
    marginRight: '5px',

    ':focus': {
      outline: 'none',
      borderColor: '#007CD1'
    },

    ':active': {
      borderColor: '#007CD1'
    },

    ':hover': {
      borderColor: 'rgba(100, 100, 100, 1)'
    }
  },

  ':checked': {
    background: '#007CD1',
    borderColor: '#007CD1'
  },

  label: {
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px',
    lineHeight: '27px',
    position: 'relative',
    color: '#000000',
  },

  labelDark: {
    color: '#ffffff',
  },

  svgChecked: {
    position: 'absolute',
    top: '5px',
    left: '6px',
    color: '#fff',
    height: '16px',
  }
};

@DesktopComponent
class CheckboxWindows extends Component {
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor(props) {
    super();
    this.state = {
      checked: props.defaultChecked === true
    };
  }

  onChange(event) {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    let { style, label, ...props } = this.props;
    let componentStyle = {...styles.checkbox, ...style};
    let checkedStyle = {display: 'none'};
    let labelStyle = styles.label;

    if (this.state.checked) {
      checkedStyle = styles.svgChecked;
      componentStyle = {...componentStyle, ...styles[':checked']};
    }

    componentStyle = {
      ...componentStyle,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'inline-block' : 'none'
    };

    if (this.state.requestedTheme === 'dark') {
      labelStyle = {...labelStyle, ...styles.labelDark};
    }

    return (
      <label style={labelStyle}>
        <input
          ref="element"
          type="checkbox"
          style={componentStyle}
          checked={this.state.checked}
          onChange={this.onChange.bind(this)}
          {...props}
        />
        <svg x="0px" y="0px" viewBox="0 0 6.4 6.4" style={checkedStyle}>
          <polygon fill="#fff" points="0,3.3 2.2,5.5 6.4,1.23 6.1,0.9 2.2,4.8 0.3,2.9 "/>
        </svg>
        {label}
      </label>
    );
  }
}

export default CheckboxWindows;
