# Split View Item

<a id="demo-Windows.SplitView"></a>

## Properties

| Property | Type    | Description                               |
| -------- | ------- | ----------------------------------------- |
| title    | string  | Title of the item.                        |
| selected | bool    | Is this item selected.                    |
| onPress  | func    | Callback function when clicking the Item. |

## Examples

```jsx
import React from 'react';
import { SplitView } from 'react-desktop';

class MySplitView extends React.Component {
  render() {
    return (
      <SplitView>
        <SplitView.Item
          title="Item 1"
          requestedTheme="light"
          background="#ffffff"
        >
          <Grid>
            This is an example of a Split View Item 1.
          </Grid>
        </SplitView.Item>
        <SplitView.Item
          title="Item 2"
          requestedTheme="light"
          background="#ffffff"
        >
          <Grid>
            This is an example of a Split View Item 2.
          </Grid>
        </SplitView.Item>
      </SplitView>
    );
  }
}
```
