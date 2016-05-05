# TextInput

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
defaultValue        | string       | Sets the default value of the input.
hidden              | bool         | Sets the visibility of a component.
label               | string       | Adds a label to the input.
margin              | string       | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
onChange            | function     | Callback function when the input changes.
placeholder         | function     | Adds a placeholder to the input.
value               | string       | Sets the value of the input.
width               | number       | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { TextInput } from 'react-desktop/osx';

export default class extends Component {
  change = () => console.log(this.refs.input.value);

  render() {
    return (
      <TextInput
        ref="input"
        label="My Input"
        placeholder="My Input"
        defaultValue=""
        onChange={this.change}
      />
    );
  }
}
```

