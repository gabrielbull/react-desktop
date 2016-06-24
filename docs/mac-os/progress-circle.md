# Progress Circle

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
color               | string       | Sets the color of the progress circle.
hidden              | bool         | Sets the visibility of a component.
size                | number       | Sets the size of the progress circle.

### Examples

```jsx
import React, { Component } from 'react';
import { ProgressCircle } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <ProgressCircle size={25}/>
    );
  }
}
```
