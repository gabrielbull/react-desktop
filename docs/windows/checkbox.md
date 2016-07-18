# Checkbox

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
color               | string       | Sets the color of the checkbox.
defaultValue        | string       | Sets the default value of the input.
defaultChecked      | string       | If true, the checkbox is checked by default.
hidden              | bool         | Sets the visibility of a component.
label               | string       | Adds a label to the checkbox.
onChange            | function     | Callback function when the checkbox has changed.
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_

### Examples

```jsx
import React, { Component } from 'react';
import { Checkbox } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (
      <Checkbox
        color={this.props.color}
        theme={this.props.theme}
        label="Check me!"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="I got checked!"
        defaultChecked
      />
    );
  }
}
```
