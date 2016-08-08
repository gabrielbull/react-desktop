import React, { Component } from 'react';
import { TitleBar, Toolbar, ToolbarNav, ToolbarNavItem } from 'react-desktop/macOs';

const circle = (
  <svg x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25">
    <circle cx="12.5" cy="12.5" r="12.5"/>
  </svg>
);

const star = (
  <svg x="0px" y="0px" width="25px" height="23.8px" viewBox="0 0 25 23.8">
    <polygon points="12.5,0 16.4,7.8 25,9.1 18.8,15.2 20.2,23.8 12.5,19.7 4.8,23.8 6.2,15.2 0,9.1 8.6,7.8 "/>
  </svg>
);

const polygon = (
  <svg x="0px" y="0px" width="25px" height="21.7px" viewBox="0 0 25 21.7">
    <polygon points="6.2,21.7 0,10.8 6.2,0 18.8,0 25,10.8 18.8,21.7 "/>
  </svg>
);

export default class extends Component {
  constructor() {
    super();
    this.state = { selected: 1 };
  }

  render() {
    return (
      <TitleBar>
        <Toolbar>
          <ToolbarNav>
            <ToolbarNavItem
              title="Item 1"
              icon={circle}
              selected={this.state.selected === 1}
              onClick={() => this.setState({ selected: 1 })}
            />
            <ToolbarNavItem
              title="Item 2"
              icon={star}
              selected={this.state.selected === 2}
              onClick={() => this.setState({ selected: 2 })}
            />
            <ToolbarNavItem
              title="Item 3"
              icon={polygon}
              selected={this.state.selected === 3}
              onClick={() => this.setState({ selected: 3 })}
            />
          </ToolbarNav>
        </Toolbar>
      </TitleBar>
    );
  }
}
