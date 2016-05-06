import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Hidden } from '../../desktopComponent';
import { getState } from 'radium';
import styles from './styles/osx10_11';
import Checkmark from './checkmark';
import Text from '../../text/osx/text';

@DesktopComponent(Hidden)
class Checkbox extends Component {
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

  onChange = event => {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    let { style, label, ...props } = this.props;
    let componentStyle = { ...styles.checkbox, ...style };
    let labelStyle = styles.label;
    let shadowColor = '#0050a5';

    if (this.state.checked) {
      componentStyle = {
        ...componentStyle,
        ...styles['checkbox:checked']
      };
    }

    if (getState(this.state, null, ':active')) {
      if (this.state.checked) {
        componentStyle = {
          ...componentStyle,
          ...styles['checkbox:checked:active']
        };
        shadowColor = '#001d99';
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['checkbox:active']
        };
      }
    }

    return (
      <div style={styles.container}>
        <label style={labelStyle}>
          <div style={styles.inputWrapper}>
            <input
              ref="element"
              type="checkbox"
              {...props}
              style={componentStyle}
              onChange={this.onChange}
            />
            <Checkmark show={this.state.checked} shadowColor={shadowColor}/>
          </div>
          <Text style={{ display: 'inline' }}>
            {label}
          </Text>
        </label>
      </div>
    );
  }
}

export default Checkbox;
