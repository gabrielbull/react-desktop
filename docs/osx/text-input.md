# TextInput

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
defaultValue        | string       | Sets the default value of the input.
hidden              | bool         | Sets the visibility of a component.
label               | string       | Adds a label to the input.
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

