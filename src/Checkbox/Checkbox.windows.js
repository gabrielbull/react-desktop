import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';

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

    ':checked': {
      background: '#007CD1',
      borderColor: '#007CD1'
    },

    ':hover': {
      borderColor: 'rgba(100, 100, 100, 1)'
    },
  },

  label: {
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px',
    lineHeight: '27px',
    position: 'relative',
  },

  checked: {
    position: 'absolute',
    top: '5px',
    left: '6px',
    color: '#fff',
    height: '16px',
  }
};

@Styling
class CheckboxWindows extends Component {
  static propTypes = {
    style: PropTypes.object,
    row: PropTypes.any,
    form: PropTypes.any,
    label: PropTypes.string,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      visible: props.visible !== false,
      display: props.display !== false,
      checked: props.defaultChecked === true
    };
  }

  get styles() {
    return mergeStyles(styles.checkbox, this.props.style);
  }

  onChange(event) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    let { style, row, form, display, visible, label, ...props } = this.props;
    let componentStyle = this.styles;
    let checkedStyle = {display: 'none'};

    if (this.state.checked) {
      checkedStyle = styles['checked'];
    }

    componentStyle = mergeStyles(componentStyle, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'inline-block' : 'none'
    });

    return (
      <label style={styles.label}>
        <input
          ref="element"
          type="checkbox"
          {...props}
          data-style={applyStyle(componentStyle)}
          checked={this.state.checked}
          onChange={this.onChange}
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
