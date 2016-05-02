import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Hidden } from '../../desktopComponent';
import { getState } from 'radium';
import styles from './styles/osx10_11';
import Text from '../../text/osx/text';
import Circle from './circle';

@DesktopComponent(Hidden)
class Radio extends Component {
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
    let { style, label, ...props } = this.props;
    let componentStyle = { ...styles.radio, ...style };
    let labelStyle = styles.label;
    let shadowColor = '#0050a5';

    if (this.state.checked) {
      componentStyle = {
        ...componentStyle,
        ...styles['radio:checked']
      };
    }

    if (getState(this.state, null, ':active')) {
      if (this.state.checked) {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:checked:active']
        };
        shadowColor = '#001d99';
      } else {
        componentStyle = {
          ...componentStyle,
          ...styles['radio:active']
        };
      }
    }

    return (
      <label style={labelStyle}>
        <input
          ref="element"
          type="radio"
          {...props}
          style={componentStyle}
          onChange={this.onChange}
        />
        <Circle show={this.state.checked} shadowColor={shadowColor}/>
        <Text style={{ display: 'inline' }}>
          {label}
        </Text>
      </label>
    );
  }
}

export default Radio;
