import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../desktop-component';
import { getState } from 'radium';

var styles = {
  checkbox: {
    WebkitUserSelect: 'none',
    WebkitAppearance: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, .8)',
    padding: '8px',
    color: '#fff',
    verticalAlign: 'bottom',
    marginRight: '9px',

    ':focus': {
      outline: 'none'
    }
  },

  checkboxDark: {
    borderColor: 'rgba(255, 255, 255, .82)',
  },

  'checkbox:active': {
    borderColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(0, 0, 0, .57)'
  },

  'checkbox:hover': {
    borderColor: 'rgba(0, 0, 0, 1)'
  },

  'checkbox:checked': {
    backgroundColor: '#007CD1',
    borderColor: '#007CD1'
  },

  'checkboxDark:active': {
    borderColor: 'rgba(255, 255, 255, 0)',
    backgroundColor: 'rgba(255, 255, 255, .63)'
  },

  'checkboxDark:hover': {
    borderColor: 'rgba(255, 255, 255, 1)'
  },

  'checkboxDark:checked': {
    backgroundColor: '#007CD1',
    borderColor: '#007CD1'
  },

  label: {
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px',
    lineHeight: '27px',
    position: 'relative',
    color: '#000000',

    ':hover': {},
    ':active': {}
  },

  labelDark: {
    color: '#ffffff'
  },

  svg: {
    position: 'absolute',
    top: '6px',
    left: '5px',
    color: '#fff',
    height: '16px'
  }
};

@DesktopComponent
class CheckboxWindows extends Component {
  static propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor(props) {
    super();
    this.state = {
      checked: props.defaultChecked === true
    };
  }

  onChange = event => {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    let { style, label, color, ...props } = this.props;
    let componentStyle = { ...styles.checkbox, ...style };
    let checkedStyle = { display: 'none' };
    let labelStyle = styles.label;

    componentStyle = {
      ...componentStyle,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'inline-block' : 'none'
    };

    if (this.state.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.checkboxDark };
      labelStyle = { ...labelStyle, ...styles.labelDark };
    }

    if (this.state.checked) {
      checkedStyle = styles.svg;
      componentStyle = {
        ...componentStyle,
        ...(this.state.theme === 'dark' ? styles['checkboxDark:checked'] : styles['checkbox:checked'])
      };

      switch (color) {
      case 'blue':
        break;
      default:
        if (color) {
          componentStyle = {
            ...componentStyle,
            backgroundColor: color,
            borderColor: color
          };
        } else {
          componentStyle = {
            ...componentStyle,
            backgroundColor: this.state.color,
            borderColor: this.state.color
          };
        }
        break;
      }
    }

    if (getState(this.state, null, ':active')) {
      componentStyle = {
        ...componentStyle,
        ...(this.state.theme === 'dark' ? styles['checkboxDark:active'] : styles['checkbox:active'])
      };
    } else if (getState(this.state, null, ':hover')) {
      componentStyle = {
        ...componentStyle,
        ...(this.state.theme === 'dark' ? styles['checkboxDark:hover'] : styles['checkbox:hover'])
      };
    }

    return (
      <label style={labelStyle}>
        <input
          ref="element"
          type="checkbox"
          style={componentStyle}
          checked={this.state.checked}
          onChange={this.onChange}
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
