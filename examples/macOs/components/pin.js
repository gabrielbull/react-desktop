import React, { Component } from 'react';
import { Pin, View } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <View background="#efeff1" padding="20px">
        <Pin
          onChange={value => console.log(value)}
          length={4}
          reveal
        />
      </View>
    );
  }
}
