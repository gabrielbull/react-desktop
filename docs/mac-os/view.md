# View

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string       | Sets the background color of a component, if bool, the color will be used as the background color.
direction           | string       | Sets the direction of the content.<br/>__Property value__ _"column"_, _"row"_
height              | number       | Sets the height of a component.
hidden              | bool         | Sets the visibility of a component.
horizontalAlignment | string       | Sets the horizontal alignment of the component's content<br/>__Property value__ _"left"_, _"center"_, _"right"_
margin              | string       | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
padding             | string       | Sets the padding inside a component.<br/>__E.G.__ _"30px 20px"_
verticalAlignment   | string       | Sets the vertical alignment of the component's content.<br/>__Property value__ _"top"_, _"center"_, _"bottom"_
width               | number       | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { View, Text } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <View
        background="black"
        padding="20px"
        horizontalAlignment="center"
        verticalAlignment="center"
        width="200px"
        height="100px"
      >
        <Text color="white">Hello World</Text>
      </View>
    );
  }
}
```
