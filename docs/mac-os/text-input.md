# TextInput

### Properties

Property            | Type                 | Description
:------------------ | :-------------------:| :----------
defaultValue        | string               | Sets the default value of the input.
hidden              | bool                 | Sets the visibility of a component.
label               | string               | Adds a label to the input.
margin              | string, number       | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
marginBottom        | string, number       | Sets the outer margin bottom of a component.
marginLeft          | string, number       | Sets the outer margin left of a component.
marginRight         | string, number       | Sets the outer margin right of a component.
marginTop           | string, number       | Sets the outer margin top of a component.
onChange            | function             | Callback function when the input changes.
placeholder         | function             | Adds a placeholder to the input.
rounded             | bool, number, string | Sets the roundness of the input border
size                | string, number       | Sets the font size of a component.
value               | string               | Sets the value of the input.
width               | number               | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { TextInput } from 'react-desktop/macOs';

export default class extends Component {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <TextInput
        label="My Input"
        placeholder="My Input"
        defaultValue=""
        onChange={this.handleChange}
      />
    );
  }
}
```

