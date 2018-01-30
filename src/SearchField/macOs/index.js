import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TextInput from '../../TextInput/macOs';
import * as icon from './icons';
import styles from './styles/10.11';
import cancelAnimation from './cancelAnimation';
import ValueRef from '../../ValueRef';

@ValueRef()
class SearchInput extends Component {
  static propTypes = {
    onCancel: PropTypes.func,
    cancel: PropTypes.bool
  };

  static defaultProps = {
    cancel: true
  };

  constructor() {
    super();
    this.state = {
      showCancel: false
    };
  }

  get searchIcon() {
    return window && window.devicePixelRatio > 1.5
      ? icon.searchIcon2x
      : icon.searchIcon1x;
  }

  get cancelIcon() {
    return window && window.devicePixelRatio > 1.5
      ? icon.cancelIcon2x
      : icon.cancelIcon1x;
  }

  handleCancelMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleCancelClick = () => {
    const element = ReactDOM.findDOMNode(this.refs.input).getElementsByTagName(
      'INPUT'
    )[0];
    element.setSelectionRange(0, element.value.length);
    setTimeout(() => {
      element.value = '';
      let event = document.createEvent('HTMLEvents');
      event.initEvent('change', false, true);
      element.dispatchEvent(event);
      event = new Event('input', { bubbles: true });
      element.dispatchEvent(event);
      element.blur();
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }, 200);
  };

  handleChange = e => {
    if (this.props.cancel) {
      if (e.target.value && !this.state.showCancel) {
        this.setState({ showCancel: true });
      } else if (!e.target.value && this.state.showCancel) {
        this.setState({ showCancel: false });
      }
    }

    if (typeof this.props.onChange === 'function') this.props.onChange(e);
  };

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      const element = ReactDOM.findDOMNode(
        this.refs.input
      ).getElementsByTagName('INPUT')[0];
      element.value = '';
      let event = document.createEvent('HTMLEvents');
      event.initEvent('change', false, true);
      element.dispatchEvent(event);
      event = new Event('input', { bubbles: true });
      element.dispatchEvent(event);
      setTimeout(() => element.blur(), 10);
    }
    if (typeof this.props.onKeyDown === 'function') this.props.onKeyDown(e);
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.showCancel && this.state.showCancel) {
      cancelAnimation(ReactDOM.findDOMNode(this.refs.cancel));
    }
  }

  render() {
    const { cancel, ...props } = this.props;
    delete props.onCancel;

    return (
      <div style={styles.container}>
        <TextInput
          ref="input"
          icon={this.searchIcon}
          rounded
          centerPlaceholder
          style={{
            paddingRight: '19px'
          }}
          {...props}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
        {cancel && this.state.showCancel ? (
          <a
            ref="cancel"
            onMouseDown={this.handleCancelMouseDown}
            onClick={this.handleCancelClick}
            style={styles.cancel}
          >
            {this.cancelIcon}
          </a>
        ) : null}
      </div>
    );
  }
}

export default SearchInput;
