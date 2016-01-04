# Window Component

## Properties

Property            | Type   | Description
:------------------ | :-----:| :----------
background          | string | Sets the background color of a component.
height              | number | Sets the height of a component.
hidden              | bool   | Sets the visibility of a component.
horizontalAlignment | string | Sets the horizontal alignment of the component's content<br/>__Property value__ _"left"_, _"center"_, _"right"_
margin              | string | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
padding             | string | Sets the padding inside a component.<br/>__E.G.__ _"30px 20px"_
style               | object | Sets the style of the component.
theme               | string | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_
verticalAlignment   | string | Sets the vertical alignment of the component's content.<br/>__Property value__ _"top"_, _"center"_, _"bottom"_
width               | number | Sets the width of a component.

## Examples

```jsx
import React from 'react';
import { View } from 'react-desktop';

class MyView extends React.Component {
  render() {
    return (
      <View>
        <TextBlock>
          This is my a View class.
        </TextBlock>
      </View>
    );
  }
}
```
