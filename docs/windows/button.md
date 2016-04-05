# Button

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
color               | string       | Sets the color of the text.
hidden              | bool         | Sets the visibility of a component.
onClick             | function     | Callback function when the button is pressed.
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
      <Button push color={this.props.color} onClick={() => console.log('Clicked!')}>
        Press me!
      </Button>
    );
  }
}
```
