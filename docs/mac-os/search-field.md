# SearchField

### Properties

Property            | Type                 | Description
:------------------ | :-------------------:| :----------
cancel              | bool                 | Sets whether the cancel button is visible.
centerPlaceholder   | bool                 | Sets whether the placeholder is animated and centered when the input is not focused.
defaultValue        | string               | Sets the default value of the input.
focusRing           | bool                 | Sets the visibility of the focus ring around the input.
hidden              | bool                 | Sets the visibility of a component.
icon                | element, array       | Adds an icon to the input.
label               | string               | Adds a label to the input.
margin              | string, number       | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
marginBottom        | string, number       | Sets the outer margin bottom of a component.
marginLeft          | string, number       | Sets the outer margin left of a component.
marginRight         | string, number       | Sets the outer margin right of a component.
marginTop           | string, number       | Sets the outer margin top of a component.
onCancel            | function             | Callback function when the user press the cancel button.
onChange            | function             | Callback function when the input changes.
onEnter             | function             | Callback function when the enter key is pressed.
placeholder         | string               | Adds a placeholder to the input.
rounded             | bool, number, string | Sets the roundness of the input border
size                | string, number       | Sets the font size of a component.
value               | string               | Sets the value of the input.
width               | number               | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';

export default class extends Component {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <TitleBar inset>
        <Toolbar height="43" horizontalAlignment="right">
          <SearchField
            placeholder="Search"
            defaultValue=""
            onChange={this.handleChange}
          />
        </Toolbar>
      </TitleBar>
    );
  }
}
```
