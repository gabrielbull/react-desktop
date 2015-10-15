# ![React Desktop](https://rawgit.com/gabrielbull/react-desktop/master/docs/react-desktop.svg "React Desktop")

[![Build Status](https://travis-ci.org/gabrielbull/react-desktop.svg)](https://travis-ci.org/gabrielbull/react-desktop)
[![Code Climate](https://codeclimate.com/github/gabrielbull/react-desktop/badges/gpa.svg)](https://codeclimate.com/github/gabrielbull/react-desktop)
[![Dependency Status](https://david-dm.org/gabrielbull/react-desktop.svg)](https://david-dm.org/gabrielbull/react-desktop)
[![devDependency Status](https://david-dm.org/gabrielbull/react-desktop/dev-status.svg)](https://david-dm.org/gabrielbull/react-desktop#info=devDependencies)
[![npm downloads](http://img.shields.io/npm/dt/react-desktop.svg)](https://www.npmjs.org/package/react-desktop)
[![npm version](https://img.shields.io/npm/v/react-desktop.svg)](https://www.npmjs.org/package/react-desktop)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gabrielbull/react-desktop?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

OS X and Windows UI components built with React.

## Contributing

This library is in its infancy and was created to fulfill the lack of such libraries for tools like node-webkit or
Electron.js. As such, everyone is welcome to contribute and add more components.

### Todos OS X

- [x] Push Button
- [ ] Textured Rounded Button
- [ ] Gradient Button
- [ ] Pop Up Button
- [ ] Check Box Button
- [ ] Radio Button
- [x] Label
- [x] Text Field
- [ ] Search Field
- [ ] Secure Text Field
- [x] Title Bar
- [x] Toolbar
- [ ] Space Toolbar Item
- [ ] Flexible Space Toolbar Item
- [x] Box
- [x] Segmented Control
- [x] Indeterminate Circular Progress Indicator
- [x] Form

### Todos Windows

- [ ] Button
- [ ] TextInput
- [ ] TitleBar
- [ ] Toolbar

## Screenshots

<img src="https://raw.githubusercontent.com/gabrielbull/react-desktop/master/docs/screenshots/osx.png" width="655">

## Usage

Simple usage:

```jsx
import {
  Window,
  TitleBar, 
  PushButton, 
  TextField, 
  Toolbar, 
  Box, 
  SegmentedControl,
  IndeterminateCircularProgressIndicator,
  Form,
  Label
} from 'react-desktop';

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = { selectedTab: 'login' };
  }

  render() {
    return (
      <Window>
        <TitleBar 
          title="My App" 
          controls
          onClosePress={() => { alert('close'); }}
          onResizePress={() => { alert('resize'); }}
          onMinimizePress={() => { alert('minimize'); }}
        >
          <Toolbar/>
        </TitleBar>
                
        <Box>
          <SegmentedControl>
            <SegmentedControl.Item 
              title="Login"
              selected={this.state.selectedTab === 'login'}
              onPress={() => { this.setState({ selectedTab: 'login' }) } }
            >
              <Form onSubmit={() => { alert('submit'); }}>
                <Label color="red">Error</Label>
                
                <Form.Row>
                  <Label>Username</Label>
                  <TextField defaultValue="" placeholder="Username"/>
                </Form.Row>
                
                <Form.Row>
                  <PushButton onPress={() => { alert('cancel'); }}>Cancel</PushButton>
                  <PushButton onPress="submit" color="blue">Submit</PushButton>
                  
                  <IndeterminateCircularProgressIndicator visible absolute/>
                </Form.Row>
              </Form>              
            </SegmentedControl.Item>
          </SegmentedControl>
        </Box>
      </Window>
    );
  }
}
```
