# Button

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
color               | string, bool | Sets whether the button is colored (bool) or sets the color of the button (string).
hidden              | bool         | Sets the visibility of a component.
onClick             | function     | Callback function when the button is pressed.
push                | bool         | Display push animation when pressing the button.
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_
type                | string       | Sets the type of the button<br/>__Property value__ _"button"_ _"submit"_. Default value _"button"_.

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
