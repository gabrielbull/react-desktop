import React, { Component } from 'react';
import { View, Link } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <View background="#efefef" padding="20px" width="300px" direction="row">
        <Link color="red">
          This is a link
        </Link>
        <Link marginLeft="auto">
          This is another link
        </Link>
      </View>
    );
  }
}
