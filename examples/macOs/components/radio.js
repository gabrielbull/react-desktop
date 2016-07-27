import React, { Component } from 'react';
import { View, Radio } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <View horizontalAlignment="center" direction="column">
          <Radio
            label="Check me!"
            name="radio1"
            onChange={(e) => console.log(e.target.value)}
            defaultValue="I got checked!"
            defaultChecked
          />
          <Radio
            label="Check me!"
            name="radio1"
            onChange={(e) => console.log(e.target.value)}
            defaultValue="I got checked!"
          />
      </View>
    );
  }
}
