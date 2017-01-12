# Text

### Properties

Property            | Type                 | Description
:------------------ | :-------------------:| :----------
background          | string               | Sets the background color of a component.
bold                | bool, number, string | Sets the bold value of a component.
color               | string               | Sets the color of the text.
height              | string, number       | Sets the height of a component.
hidden              | bool                 | Sets the visibility of a component.
margin              | string, number       | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
marginBottom        | string, number       | Sets the outer margin bottom of a component.
marginLeft          | string, number       | Sets the outer margin left of a component.
marginRight         | string, number       | Sets the outer margin right of a component.
marginTop           | string, number       | Sets the outer margin top of a component.
padding             | string, number       | Sets the padding inside a component.<br/>__E.G.__ _"30px 20px"_
paddingBottom       | string, number       | Sets the padding bottom inside a component.
paddingLeft         | string, number       | Sets the padding left inside a component.
paddingRight        | string, number       | Sets the padding right inside a component.
paddingTop          | string, number       | Sets the padding top inside a component.
size                | string, number       | Sets the font size of a component.
textAlign           | string               | Sets the text alignment of the component's content.<br/>__Property value__ _"left"_, _"center"_, _"right"_
width               | string, number       | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { Text } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <Text padding="0 100px" textAlign="center" size="16">
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
