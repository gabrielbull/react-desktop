import React, { Component } from 'react';
import { View, Radio } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29'
  };

  render() {
    return (
      <View horizontalAlignment="center" direction="column">
          <Radio
            color={this.props.color}
            label="Check me!"
            name="radio1"
            onChange={(e) => console.log(e.target.value)}
            defaultValue="I got checked!"
            defaultChecked
          />
          <Radio
            color={this.props.color}
            label="Check me!"
            name="radio1"
            onChange={(e) => console.log(e.target.value)}
            defaultValue="I got checked!"
          />
      </View>
    );
  }
}
