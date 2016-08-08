# Segmented Control

## SegmentedControl

### Properties

Property            | Type           | Description
:------------------ | :-------------:| :----------
box                 | bool           | Sets whether the item is in a box or not.
height              | number         | Sets the height of a component.
hidden              | bool           | Sets the visibility of a component.
margin              | string, number | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
marginBottom        | string, number | Sets the outer margin bottom of a component.
marginLeft          | string, number | Sets the outer margin left of a component.
marginRight         | string, number | Sets the outer margin right of a component.
marginTop           | string, number | Sets the outer margin top of a component.
width               | number         | Sets the width of a component.

## SegmentedControlItem

### Properties

Property            | Type     | Description
:------------------ | :-------:| :----------
title               | string   | Sets the title of the item.
onSelect            | function | Callback function when selecting an item.
selected            | bool     | Sets whether the item is selected or not. 

### Examples

```jsx
import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';

export default class extends Component {
  constructor() {
    super();
    this.state = { selected: 1 }
  }

  render() {
    return (
      <SegmentedControl box>
        {this.renderItems()}
      </SegmentedControl>
    );
  }

  renderItems() {
    return [
      this.renderItem(1, 'Tab 1', <Text>Content 1</Text>),
      this.renderItem(2, 'Tab 2', <Text>Content 2</Text>),
      this.renderItem(3, 'Tab 3', <Text>Content 3</Text>)
    ];
  }

  renderItem(key, title, content) {
    return (
      <SegmentedControlItem
        key={key}
        title={title}
        selected={this.state.selected === key}
        onSelect={() => this.setState({ selected: key })}
      >
        {content}
      </SegmentedControlItem>
    );
  }
}
```
