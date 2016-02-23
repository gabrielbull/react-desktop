# Progress Circle

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
color               | string       | Sets the color of the text.
hidden              | bool         | Sets the visibility of a component.
hesizeight          | number       | Sets the size of the progress circle.

### Examples

```jsx
import React, { Component } from 'react';
import { ProgressCircle } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29'
  };

  render() {
    return (
      <ProgressCircle
        color={this.props.color}
        size="100"
      />
    );
  }
}
```
