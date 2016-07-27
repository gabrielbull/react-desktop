import React, { Component } from 'react';
import {
  MasterDetailsView,
  MasterDetailsViewItem,
  MasterDetailsViewItemMaster,
  MasterDetailsViewItemDetails,
  Text
} from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
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
      <MasterDetailsViewItem>
        <MasterDetailsViewItemMaster push>
          {master}
        </MasterDetailsViewItemMaster>
        <MasterDetailsViewItemDetails background>
          <Text padding="20px" color="white">{details}</Text>
        </MasterDetailsViewItemDetails>
      </MasterDetailsViewItem>
    );
  }
}
