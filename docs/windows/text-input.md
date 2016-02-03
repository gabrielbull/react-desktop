# TextInput

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string, bool | Sets the background color of a component, if bool, the color will be used as the background color.
color               | string       | Sets the main color of a component and it's children.
defaultValue               | string       | Sets the main color of a component and it's children.
header              | number       | Sets the height of a component.
height              | number       | Sets the height of a component.
hidden              | bool         | Sets the visibility of a component.
horizontalAlignment | string       | Sets the horizontal alignment of the component's content<br/>__Property value__ _"left"_, _"center"_, _"right"_
onChange        | function     | Callback function of the close button.
placeholder        | function     | Callback function of the close button.
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_
verticalAlignment   | string       | Sets the vertical alignment of the component's content.<br/>__Property value__ _"top"_, _"center"_, _"bottom"_
width               | number       | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { TextInput } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'dark'
  };

  change = () => console.log(this.refs.input.value);

  render() {
    return (
      <TextInput
        ref="input"
        theme={this.props.theme}
        color={this.props.color}
        header="My Input"
        placeholder="My Input"
        defaultValue="Hello!"
        onChange={this.change}
      />
    );
  }
}
```

