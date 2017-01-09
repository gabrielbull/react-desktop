# TextInput

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string, bool | Sets the background color of a component, if bool, the color will be used as the background color.
color               | string       | Sets the main color of a component and it's children.
defaultValue        | string       | Sets the default value of the input.
hidden              | bool         | Sets the visibility of a component.
label               | string       | Adds a label to the input.
labelColor          | string, bool | Sets whether the label text is colored (bool) or sets the color of the label text (string).
labelStyle          | object       | Custom styles for the label.
margin              | string       | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
onChange            | function     | Callback function when the input changes.
placeholder         | function     | Adds a placeholder to the input.
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_
value               | string       | Sets the value of the input.
width               | number       | Sets the width of a component.
password            | bool         | Sets the input type to password.

### Examples

```jsx
import React, { Component } from 'react';
import { TextInput } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <TextInput
        ref="input"
        theme={this.props.theme}
        color={this.props.color}
        background
        label="My Input"
        placeholder="My Input"
        onChange={this.handleChange}
      />
    );
  }
}
```

