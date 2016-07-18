# Radio

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
color               | string       | Sets the color of the radio.
defaultValue        | string       | Sets the default value of the input.
defaultChecked      | string       | If true, the radio is checked by default.
hidden              | bool         | Sets the visibility of a component.
label               | string       | Adds a label to the checkbox.
name                | string       | Name of the input.
onChange            | function     | Callback function when the checkbox has changed.
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_

### Examples

```jsx
import React, { Component } from 'react';
import { View, Radio } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (
      <View horizontalAlignment="center" layout="vertical" theme={this.props.theme}>
          <Radio
            color={this.props.color}
            label="Check me!"
            name="radio1"
            onChange={(e) => console.log(e.target.value)}
            defaultValue="I got checked!"
            defaultChecked
          />
          <Radio
            color={this.props.color}
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
