import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Hidden } from '../../desktopComponent';
import { getState } from 'radium';
import styles from './styles/windows';
import Text from '../../text/windows/text';

@DesktopComponent(Hidden)
class Radio extends Component {
  static propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor(props) {
    super();
    this.state = {
      checked: props.defaultChecked === true
    };
  }

  componentDidMount() {
    document.addEventListener('change', this.onSiblingChange);
  }

  componentWillUnmount() {
    document.removeEventListener('change', this.onSiblingChange);
  }

  onSiblingChange = () => {
    if (this.refs.element.checked !== this.state.checked) {
      this.setState({ checked: this.refs.element.checked });
    }
  };

  onChange = event => {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    let { style, label, color, ...props } = this.props;
    let componentStyle = { ...styles.radio, ...style };
    let labelStyle = styles.label;
    let circleStyle = { ...styles.circle };

    if (this.state.checked) {
      componentStyle = {
        ...componentStyle,
        ...styles['radio:checked'],
        borderColor: color || this.context.color
      };
    }

    if (getState(this.state, null, ':active')) {
      if (this.state.checked) {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:checked:active']
        };
        circleStyle = {
          ...circleStyle,
          ...styles['circle:active']
        };
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:active']
        };
      }
    } else if (getState(this.state, null, ':hover')) {
      if (this.state.checked) {
        circleStyle = {
          ...circleStyle,
          ...styles['circle:hover']
        };
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:hover']
        };
      }
    }

    return (
      <div style={styles.container}>
        <label style={labelStyle}>
          <div style={styles.inputWrapper}>
            <input
              ref="element"
              type="radio"
              {...props}
              style={componentStyle}
              onChange={this.onChange}
            />
            {this.state.checked ? <div style={circleStyle}/> : null}
          </div>
          <Text style={styles.text}>
            {label}
          </Text>
        </label>
      </div>
    );
  }
}

export default Radio;
