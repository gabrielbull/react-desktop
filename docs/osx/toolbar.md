# Toolbar

### Examples

```jsx
import React, { Component } from 'react';
import { TitleBar, Toolbar } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <TitleBar
        title="Large Titlebar"
        controls
      >
        <Toolbar/>
      </TitleBar>
    );
  }
}
```
