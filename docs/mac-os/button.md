# Button

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
color               | string       | Sets the color of the button<br/>__Property value__ _null_ _"blue"_.
hidden              | bool         | Sets the visibility of a component.
onClick             | function     | Callback function when the button is pressed.
type                | string       | Sets the type of the button<br/>__Property value__ _"button"_ _"submit"_. Default value _"button"_.

### Examples

```jsx
import React, { Component } from 'react';
import { Button } from 'react-desktop/macOs';

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
