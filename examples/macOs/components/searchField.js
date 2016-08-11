import React, { Component } from 'react';
import { TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';

export default class extends Component {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <TitleBar inset>
        <Toolbar height="43" horizontalAlignment="right">
          <SearchField
            placeholder="Search"
            defaultValue=""
            onChange={this.handleChange}
          />
        </Toolbar>
      </TitleBar>
    );
  }
}
