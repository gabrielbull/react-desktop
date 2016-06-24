# Text

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string       | Sets the background color of a component.
color               | string       | Sets the color of the text.
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
import { Text } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <Text
        horizontalAlignment="center"
        verticalAlignment="center"
        padding="0 100px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo urna, posuere vitae est et, accumsan
        bibendum sapien. Suspendisse lobortis mollis finibus. Nunc tincidunt enim est, efficitur semper dolor luctus
        eget. Donec faucibus dolor id leo tincidunt, condimentum mattis augue finibus. Etiam hendrerit ipsum nisi,
        vel semper dolor malesuada a. Pellentesque a scelerisque sapien, quis interdum odio. Nulla posuere, velit sit
        amet lacinia pharetra, sapien arcu convallis dolor, id congue erat lectus nec sem. Praesent pretium a nisi et
        elementum. Cras lacinia sollicitudin suscipit. Phasellus accumsan felis odio. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
      </Text>
    );
  }
}
```
