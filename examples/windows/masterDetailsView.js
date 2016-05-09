import React, { Component } from 'react';
import { MasterDetailsView, Text } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'dark'
  };

  render() {
    return (
      <MasterDetailsView color={this.props.color} theme={this.props.theme}>
        {this.renderItem('Item 1', 'Content 1')}
        {this.renderItem('Item 2', 'Content 2')}
        {this.renderItem('Item 3', 'Content 3')}
      </MasterDetailsView>
    );
  }

  renderItem(master, details) {
    return (
      <MasterDetailsView.Item>
        <MasterDetailsView.Item.Master push>
          {master}
        </MasterDetailsView.Item.Master>
        <MasterDetailsView.Item.Details background>
          <Text padding="20px" color="white">{details}</Text>
        </MasterDetailsView.Item.Details>
      </MasterDetailsView.Item>
    );
  }
}
