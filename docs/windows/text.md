# Text

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string, bool | Sets whether the background is colored (bool) or sets the color of the background (string).
color               | string, bool | Sets whether the text is colored (bool) or sets the color of the text (string).
height              | number       | Sets the height of a component.
hidden              | bool         | Sets the visibility of a component.
horizontalAlignment | string       | Sets the horizontal alignment of the component's content<br/>__Property value__ _"left"_, _"center"_, _"right"_
margin              | string       | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
padding             | string       | Sets the padding inside a component.<br/>__E.G.__ _"30px 20px"_
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_
verticalAlignment   | string       | Sets the vertical alignment of the component's content.<br/>__Property value__ _"top"_, _"center"_, _"bottom"_
width               | number       | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { Text } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (
      <Text
        background={this.props.color}
        theme={this.props.theme}
        width="100%"
        horizontalAlignment="center"
        verticalAlignment="center"
        padding="100px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo urna, posuere vitae est et, accumsan
        bibendum sapien. Suspendisse lobortis mollis finibus. Nunc tincidunt enim est, efficitur semper dolor luctus
        eget. Donec faucibus dolor id leo tincidunt, condimentum mattis augue finibus. Etiam hendrerit ipsum nisi,
        vel semper dolor malesuada a. Pellentesque a scelerisque sapien, quis interdum odio. Nulla posuere, velit sit
        amet lacinia pharetra, sapien arcu convallis dolor, id congue erat lectus nec sem. Praesent pretium a nisi et
        elementum. Cras lacinia sollicitudin suscipit. Phasellus accumsan felis odio. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
      </Text>
    );
  }
}
```
