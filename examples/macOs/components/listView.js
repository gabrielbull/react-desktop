import React, { Component } from 'react';
import {
  ListView,
  ListViewHeader,
  ListViewFooter,
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
        <ListViewFooter>
          <Text size="11" color="#696969">Status</Text>
        </ListViewFooter>
      </ListView>
    );
  }

  renderSectionHeader(title) {
    return (
      <ListViewSectionHeader>
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
        <svg x="0px" y="0px" width="18" height="12" viewBox="0 0 18 12" style={{ marginRight: '6px' }}>
          <path fill="#727476" d="M13.2,0H4.9L0,6.8v3.7C0,11.3,0.7,12,1.5,12h15
	c0.8,0,1.5-0.7,1.5-1.5V6.8L13.2,0z M13.8,6.8L12.3,9L5.9,9L4.2,6.8l-3.1,0l4.2-6h7.4l4.2,6L13.8,6.8z"/>
          <polygon fill="#C9CBCD" points="13.8,6.8 12.3,9 5.9,9 4.2,6.8 1.2,6.7 5.4,0.8 12.8,0.8
	17,6.7 "/>
        </svg>
        <Text color="#414141" size="13">{info}</Text>
      </ListViewRow>
    );
  }
}
