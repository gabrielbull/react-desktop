# Window

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string       | Sets the background color of a component, if bool, the color will be used as the background color.
chrome              | bool         | Sets the chrome of the window.
height              | number       | Sets the height of a component.
hidden              | bool         | Sets the visibility of a component.
horizontalAlignment | string       | Sets the horizontal alignment of the component's content<br/>__Property value__ _"left"_, _"center"_, _"right"_
padding             | string       | Sets the padding inside a component.<br/>__E.G.__ _"30px 20px"_
verticalAlignment   | string       | Sets the vertical alignment of the component's content.<br/>__Property value__ _"top"_, _"center"_, _"bottom"_
width               | number       | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <Window
        chrome
        width="1000px"
        height="600px"
        padding="10px"
      >
        <TitleBar title="untitled text 5" controls/>
        <Text>Hello World</Text>
      </Window>
    );
  }
}
```
