import React, { Component } from 'react';
import TextInput from '../../textInput/macOs/textInput';
import * as icon from './icon';

class SearchInput extends Component {
  get icon() {
    return window && window.devicePixelRatio > 1.5 ? icon.icon2x : icon.icon1x;
  }

  render() {
    const { ...props } = this.props;

    return (
      <TextInput
        icon={this.icon}
        rounded
        centerPlaceholder
        {...props}
      />
    );
  }
}

export default SearchInput;
