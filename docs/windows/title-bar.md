# TitleBar

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string, bool | Sets the background color of a component, if bool, the color will be used as the background color.
controls            | bool         | Sets the visibility of the controls of the title bar.
color               | string       | Sets the main color of a component and it's children.
isMaximized         | bool         | Sets the title bar state to maximized.
onCloseClick        | function     | Callback function of the close button.
onMaximizeClick     | function     | Callback function of the maximize button
onMinimizeClick     | function     | Callback function of the minimize button
onRestoreDownClick  | function     | Callback function of the restore down button
title               | string       | Sets the title of the title bar.
theme               | string       | Sets the UI theme that is used by this component and its children elements.<br/>__Property value__ _"light"_, _"dark"_

### Examples

```jsx
import React, { Component } from 'react';
import { TitleBar } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  constructor(props) {
    super(props);
    this.state = { isMaximized: true };
  }

  close = () => console.log('close');
  minimize = () => console.log('minimize');
  toggleMaximize = () => this.setState({ isMaximized: !this.state.isMaximized });

  render() {
    return (
      <TitleBar
        title="My Windows Application"
        controls
        isMaximized={this.state.isMaximized}
        theme={this.props.theme}
        background={this.props.color}
        onCloseClick={this.close}
        onMinimizeClick={this.minimize}
        onMaximizeClick={this.toggleMaximize}
        onRestoreDownClick={this.toggleMaximize}
      />
    );
  }
}
```
