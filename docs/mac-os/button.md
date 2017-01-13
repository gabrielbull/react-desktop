# Button

### Properties

Property            | Type           | Description
:------------------ | :-------------:| :----------
color               | string         | Sets the color of the button<br/>__Property value__ _null_ _"blue"_.
hidden              | bool           | Sets the visibility of a component.
margin              | string, number | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
marginBottom        | string, number | Sets the outer margin bottom of a component.
marginLeft          | string, number | Sets the outer margin left of a component.
marginRight         | string, number | Sets the outer margin right of a component.
marginTop           | string, number | Sets the outer margin top of a component.
onClick             | function       | Callback function when the button is pressed.
onEnter             | function       | Callback function when the the enter key is pressed.
padding             | string, number | Sets the padding inside a component.<br/>__E.G.__ _"30px 20px"_
paddingBottom       | string, number | Sets the padding bottom inside a component.
paddingLeft         | string, number | Sets the padding left inside a component.
paddingRight        | string, number | Sets the padding right inside a component.
paddingTop          | string, number | Sets the padding top inside a component.
size                | string, number | Sets the font size of a component.
type                | string         | Sets the type of the button<br/>__Property value__ _"button"_ _"submit"_. Default value _"button"_.

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
