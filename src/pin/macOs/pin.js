import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../../textInput/macOs/textInput';

class Pin extends Component {
  static propTypes = {
    length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
    const el = ReactDOM.findDOMNode(this.refs[this.state.current]).getElementsByTagName('INPUT')[0];
    el.focus();
  };

  handleChange = (e, index) => {
    this.setState({
      current: index + 1
    });
    setTimeout(this.handleBlur);
    console.log(e.target.value, index);
  };

  handleKeyPress = e => {
    if (e.charCode >= 48 && e.charCode <= 57) {
      return true;
    }
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { length } = this.props;

    const children = [];
    for (let i = 0, len = parseInt(length); i < len; ++i) {
      children.push(
        <TextInput
          ref={i}
          key={i}
          rounded
          type="password"
          width="36px"
          maxLength="1"
          marginRight="8px"
          onChange={e => this.handleChange(e, i)}
          onBlur={e => this.handleBlur(e, i)}
          onKeyPress={this.handleKeyPress}
          style={{
            fontSize: '32px',
            lineHeight: '32px',
            textAlign: 'center',
            paddingTop: '3px',
            paddingBottom: '4px',
            color: '#464646'
          }}
        />
      );
    }

    return (
      <div style={{ display: 'flex' }}>
        {children}
      </div>
    );
  }
}

export default Pin;
