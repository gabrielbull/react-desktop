# Radio

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
defaultValue        | string       | Sets the default value of the input.
defaultChecked      | string       | If true, the radio is checked by default.
hidden              | bool         | Sets the visibility of a component.
label               | string       | Adds a label to the checkbox.
name                | string       | Name of the input.
onChange            | function     | Callback function when the checkbox has changed.

### Examples

```jsx
import React, { Component } from 'react';
import { View, Radio } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <View horizontalAlignment="center" direction="column">
          <Radio
            label="Check me!"
            name="radio1"
            onChange={(e) => console.log(e.target.value)}
            defaultValue="I got checked!"
            defaultChecked
          />
          <Radio
            label="Check me!"
            name="radio1"
            onChange={(e) => console.log(e.target.value)}
            defaultValue="I got checked!"
          />
      </View>
    );
  }
}
```
