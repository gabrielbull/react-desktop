import React, { Component } from 'react';
import { Text } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (
      <Text
        background={this.props.color}
        theme={this.props.theme}
        width="100%"
        horizontalAlignment="center"
        verticalAlignment="center"
        padding="100px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo urna, posuere vitae est et, accumsan
        bibendum sapien. Suspendisse lobortis mollis finibus. Nunc tincidunt enim est, efficitur semper dolor luctus
        eget. Donec faucibus dolor id leo tincidunt, condimentum mattis augue finibus. Etiam hendrerit ipsum nisi,
        vel semper dolor malesuada a. Pellentesque a scelerisque sapien, quis interdum odio. Nulla posuere, velit sit
        amet lacinia pharetra, sapien arcu convallis dolor, id congue erat lectus nec sem. Praesent pretium a nisi et
        elementum. Cras lacinia sollicitudin suscipit. Phasellus accumsan felis odio. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
      </Text>
    );
  }
}
