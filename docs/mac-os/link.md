# Link

### Properties

Property            | Type           | Description
:------------------ | :-------------:| :----------
color               | string         | Sets the color of the text.
height              | string, number | Sets the height of a component.
hidden              | bool           | Sets the visibility of a component.
margin              | string, number | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
marginBottom        | string, number | Sets the outer margin bottom of a component.
marginLeft          | string, number | Sets the outer margin left of a component.
marginRight         | string, number | Sets the outer margin right of a component.
marginTop           | string, number | Sets the outer margin top of a component.
padding             | string, number | Sets the padding inside a component.<br/>__E.G.__ _"30px 20px"_
paddingBottom       | string, number | Sets the padding bottom inside a component.
paddingLeft         | string, number | Sets the padding left inside a component.
paddingRight        | string, number | Sets the padding right inside a component.
paddingTop          | string, number | Sets the padding top inside a component.
size                | string, number | Sets the font size of a component.
textAlign           | string         | Sets the text alignment of the component's content.<br/>__Property value__ _"left"_, _"center"_, _"right"_
width               | string, number | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { View, Link } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <View background="#efefef" padding="20px" width="300px" direction="row">
        <Link color="red">
          This is a link
        </Link>
        <Link marginLeft="auto">
          This is another link
        </Link>
      </View>
    );
  }
}
```
