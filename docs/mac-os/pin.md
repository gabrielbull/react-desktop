# Pin

### Properties

Property            | Type           | Description
:------------------ | :-------------:| :----------
hidden              | bool           | Sets the visibility of a component.
length              | number         | Sets the length of the pin.
margin              | string, number | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
marginBottom        | string, number | Sets the outer margin bottom of a component.
marginLeft          | string, number | Sets the outer margin left of a component.
marginRight         | string, number | Sets the outer margin right of a component.
marginTop           | string, number | Sets the outer margin top of a component.
onChange            | function       | Callback function when the input changes.
reveal              | bool           | Reveals the characters in the pin.

### Examples

```jsx
import React, { Component } from 'react';
import { Pin, View } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <View background="#efeff1" padding="20px">
        <Pin
          onChange={value => console.log(value)}
          length={4}
          reveal
        />
      </View>
    );
  }
}
```
