# Button

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
color               | string       | Sets the color of the text<br/>__Property value__ _null_ _"blue"_.
hidden              | bool         | Sets the visibility of a component.
onClick             | function     | Callback function when the button is pressed.

### Examples

```jsx
import React, { Component } from 'react';
import { Button } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <Button color="blue" onClick={() => console.log('Clicked!')}>
        Press me!
      </Button>
    );
  }
}
```
