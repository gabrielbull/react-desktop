# Button

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string, bool | Sets the background color of a component, if bool, the color will be used as the background color.
color               | string       | Sets the color of the text.
hidden              | bool         | Sets the visibility of a component.
onPress             | function     | Callback function when the button is pressed.
push                | bool         | Display push animation when pressing the button.
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_

### Examples

```jsx
import React, { Component } from 'react';
import { Button } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29'
  };

  render() {
    return (
      <Button push color={this.props.color} onPress={() => console.log('Pressed!')}>
        Press me!
      </Button>
    );
  }
}
```
