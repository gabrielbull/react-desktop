# MasterDetailsView

## MasterDetailsView

### Properties

Property            | Type   | Description
:------------------ | :-----:| :----------
color               | string | Sets the main color of a component.
theme               | string | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_

## MasterDetailsViewItem

### Properties

Property            | Type   | Description
:------------------ | :-----:| :----------
color               | string | Sets the main color of a component.
theme               | string | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_

## MasterDetailsViewItemMaster

### Properties

Property            | Type   | Description
:------------------ | :-----:| :----------
color               | string | Sets the main color of a component.
push                | bool   | Display push animation when selecting an item.
selected            | bool   | Master is selected.
theme               | string | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_
width               | number | Sets the width of a component.

## MasterDetailsViewItemDetails

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string, bool | Sets the background color of a component, if bool, the color will be used as the background color.
color               | string       | Sets the main color of a component.
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_

### Examples

```jsx
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
```
