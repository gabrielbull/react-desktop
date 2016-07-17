import React, { Component, PropTypes } from 'react';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import { getState } from 'radium';
import styles from './styles/10.11';
import Text from '../../text/macOs/text';
import Circle from './circle';
import Radium from 'radium';

@Hidden()
@Radium
class Radio extends Component {
  static propTypes = {
    ...hiddenPropTypes,
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

  handleChange = event => {
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
      <div style={styles.container}>
        <label style={labelStyle}>
          <div style={styles.inputWrapper}>
            <input
              ref="element"
              type="radio"
              {...props}
              style={componentStyle}
              onChange={this.handleChange}
            />
            <Circle show={this.state.checked} shadowColor={shadowColor}/>
          </div>
          <Text style={{ display: 'inline' }}>
            {label}
          </Text>
        </label>
      </div>
    );
  }
}

export default Radio;
