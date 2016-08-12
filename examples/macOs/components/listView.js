import React, { Component } from 'react';
import {
  ListView,
  ListViewHeader,
  ListViewSection,
  ListViewSectionHeader,
  ListViewRow,
  ListViewSeparator,
  Text
} from 'react-desktop/macOs';

export default class extends Component {
  constructor() {
    super();
    this.state = { selected: null };
  }

  render() {
    return (
      <ListView background="#f1f2f4" width="240" height="200">
        <ListViewHeader>
          <Text size="11" color="#696969">Order by name</Text>
        </ListViewHeader>
        <ListViewSection header={this.renderSectionHeader('My Section')}>
          {this.renderItem('Item 1', 'This is the first item.')}
          {this.renderItem('Item 2', 'This is the second item.')}
          {this.renderItem('Item 3', 'This is the third item.')}
        </ListViewSection>
        <ListViewSeparator/>
        <ListViewSection header={this.renderSectionHeader('My Section 2')}>
          {this.renderItem('Item 4', 'This is the fourth item.')}
          {this.renderItem('Item 5', 'This is the fifth item.')}
          {this.renderItem('Item 6', 'This is the sixth item.')}
        </ListViewSection>
      </ListView>
    );
  }

  renderSectionHeader(title) {
    return (
      <ListViewSectionHeader marginBottom="4px">
        {title}
      </ListViewSectionHeader>
    );
  }

  renderItem(title, info) {
    return (
      <ListViewRow
        onClick={() => this.setState({ selected: title })}
        background={this.state.selected === title ? '#d8dadc' : null}
      >
        <Text color="#272929" size="12" bold>{title}</Text>
        <Text color="#272929" size="12">{info}</Text>
      </ListViewRow>
    );
  }
}
