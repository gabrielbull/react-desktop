import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TextInput from '../../TextInput/macOs';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Margin, { marginPropTypes, removeMarginProps } from '../../style/margin';

@Hidden()
@Margin()
class Pin extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...marginPropTypes,
    reveal: PropTypes.bool,
    length: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    onChange: PropTypes.func
  };

  constructor(props, ...args) {
    super(props, ...args);
    const lenght = parseInt(props.length);
    this.state = {
      current: 0,
      pin: new Array(lenght)
    };
  }

  componentDidMount() {
    this.handleBlur();
  }

  handleBlur = (e, index) => {
    if (e && index === this.state.current) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (this.state.current !== null) {
      this.selectInput(this.state.current);
    }
  };

  selectInput = index => {
    if (this.refs[index]) {
      const el = ReactDOM.findDOMNode(this.refs[index]).getElementsByTagName(
        'INPUT'
      )[0];
      el.focus();
    }
  };

  setValue = (index, value) => {
    if (this.refs[index]) {
      const el = ReactDOM.findDOMNode(this.refs[index]).getElementsByTagName(
        'INPUT'
      )[0];
      // Use execCommand instead of direct assignment to keep the browser's undo stack
      // This currently only handles delete, add conditions if use for other purposes
      el.focus();
      document.execCommand('delete', false);
      const pin = [
        ...this.state.pin.slice(0, index),
        value,
        ...this.state.pin.slice(index + 1)
      ];
      this.setState({ pin });
      if (this.props.onChange) this.props.onChange(pin.join(''));
    }
  };

  handleChange = (e, index) => {
    if (e.target.value || this.state.current === index + 1) {
      // In case of undoing insert, switch back to previous pin
      let nextIndex = (index === this.props.length - 1 || !e.target.value) ? index : index + 1;
      const pin = [
        ...this.state.pin.slice(0, index),
        e.target.value,
        ...this.state.pin.slice(index + 1)
      ];
      this.setState({ current: nextIndex, pin });
      setTimeout(() => this.selectInput(nextIndex));
      if (this.props.onChange) this.props.onChange(pin.join(''));
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 8) {
      if (e.target.value) {
        this.setValue(this.state.current, '');
      } else {
        const nextIndex = this.state.current - 1;
        this.setState({ current: nextIndex });
        setTimeout(() => {
          this.selectInput(nextIndex);
          this.setValue(nextIndex, '');
        });
      }
    }
  };

  handleKeyPress = e => {
    if (e.charCode >= 48 && e.charCode <= 57) {
      return true;
    }
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { length, reveal, style, ...props } = this.props;
    delete props.onChange;

    const children = [];
    for (let i = 0, len = parseInt(length); i < len; ++i) {
      children.push(
        <TextInput
          ref={i}
          key={i}
          rounded
          type={reveal ? 'tel' : 'password'}
          width="36px"
          maxLength="1"
          marginRight="8px"
          onChange={e => this.handleChange(e, i)}
          onBlur={e => this.handleBlur(e, i)}
          onKeyDown={this.handleKeyDown}
          onKeyPress={this.handleKeyPress}
          style={{
            fontSize: '32px',
            lineHeight: '32px',
            textAlign: 'center',
            paddingTop: '3px',
            paddingBottom: '4px',
            color: '#464646'
          }}
          {...removeMarginProps(props)}
        />
      );
    }

    return <div style={{ display: 'flex', ...style }}>{children}</div>;
  }
}

export default Pin;
