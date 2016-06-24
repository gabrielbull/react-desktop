# Checkbox

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
defaultValue        | string       | Sets the default value of the input.
defaultChecked      | string       | If true, the checkbox is checked by default.
hidden              | bool         | Sets the visibility of a component.
label               | string       | Adds a label to the checkbox.
onChange            | function     | Callback function when the checkbox has changed.

### Examples

```jsx
import React, { Component } from 'react';
import { Checkbox } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <Checkbox
        label="Check me!"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="I got checked!"
        defaultChecked
      />
    );
  }
}
```
