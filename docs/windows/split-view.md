# SplitView class

<a id="demo-Windows.SplitView"></a>

## Properties

| Property            | Type   | Description                                                            |
| ------------------- | ------ | ---------------------------------------------------------------------- |
| id                  | string | Unique ID used for persisting state.                                   |
| compactLength       | number | Width of the Split View Pane when in compact view.                     |
| openLength          | number | Width of the Split View Pane when in open view.                        |
| placement           | string | (Not yet implemented.)                                                 |
| isOpen              | bool   | Is the Split View Pane open.                                           |
| persistIsOpen       | bool   | Save the state of the Split View Pane. Require Window Storage.         |
| persistSelectedItem | bool   | Save the state of the selected item. Require Window Storage.           |
| push                | bool   | Display push animation when selecting an item.                         |
| onPaneToggle        | func   | Callback function for Split View Pane toggle between open and compact. |

## Examples

```jsx
import React from 'react';
import { SplitView, TextBlock } from 'react-desktop';

class MySplitView extends React.Component {
  render() {
    return (
      <SplitView>
        <SplitView.Item title="Item 1">
          <TextBlock>
            This is an example of a Split View Item 1.
          </TextBlock>
        </SplitView.Item>
        <SplitView.Item title="Item 2">
          <TextBlock>
            This is an example of a Split View Item 2.
          </TextBlock>
        </SplitView.Item>
      </SplitView>
    );
  }
}
```
