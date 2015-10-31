# SplitView.Item class

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

class MySplitViewItem extends React.Component {
  render() {
    return (
      <SplitView.Item title="Item 1">
        <TextBlock>
          This is an example of a Split View Item.
        </TextBlock>
      </SplitView.Item>
    );
  }
}
```
