import React, { Component } from 'react';
import { Box, Text } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <Box label="Box" padding="10px 30px">
        <Text>Some text...</Text>
      </Box>
    );
  }
}
