# Toolbar

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
height              | number       | Sets the height of a component.
horizontalAlignment | string       | Sets the horizontal alignment of the component's content<br/>__Property value__ _"left"_, _"center"_, _"right"_
verticalAlignment   | string       | Sets the vertical alignment of the component's content.<br/>__Property value__ _"top"_, _"center"_, _"bottom"_
width               | number       | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { TitleBar, Toolbar, Text } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <TitleBar controls inset>
        <Toolbar height="43" horizontalAlignment="center"/>
      </TitleBar>
    );
  }
}
```
