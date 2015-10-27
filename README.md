# <a href="http://gabrielbull.github.io/react-desktop/" target="_blank">![React Desktop](https://rawgit.com/gabrielbull/react-desktop/master/docs/resources/react-desktop.svg "React Desktop")</a>

[![Build Status](https://travis-ci.org/gabrielbull/react-desktop.svg?branch=master)](https://travis-ci.org/gabrielbull/react-desktop)
[![Code Climate](https://codeclimate.com/github/gabrielbull/react-desktop/badges/gpa.svg)](https://codeclimate.com/github/gabrielbull/react-desktop)
[![Dependency Status](https://david-dm.org/gabrielbull/react-desktop.svg)](https://david-dm.org/gabrielbull/react-desktop)
[![devDependency Status](https://david-dm.org/gabrielbull/react-desktop/dev-status.svg)](https://david-dm.org/gabrielbull/react-desktop#info=devDependencies)
[![npm downloads](http://img.shields.io/npm/dt/react-desktop.svg)](https://www.npmjs.org/package/react-desktop)
[![npm version](https://img.shields.io/npm/v/react-desktop.svg)](https://www.npmjs.org/package/react-desktop)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gabrielbull/react-desktop?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

<i>This library is in early Alpha and is subject to breaking change in the coming weeks.</i>

React UI Components for OS X El Capitan and Windows 10.

> npm install react-desktop --save

<a href="http://gabrielbull.github.io/react-desktop/demo/" target="_blank">![Demo](https://rawgit.com/gabrielbull/react-desktop/master/docs/resources/demo.svg "Demo")</a>

## Contributing

This library has been created to bring a native desktop experience to the web. It works extremely well with tools such as [node-webkit](http://nwjs.io) or [Electron.js](http://electron.atom.io)!

Everyone is welcome to contribute and add more components/documentation whilst following the [contributing guidelines](/CONTRIBUTING.md).

## Documentation

Guides on installation, components and advanced usage are found in the [documentation](/docs/README.md).

## Todos OS X

- [x] Box
- [ ] Check Box Button
- [x] Indeterminate Circular Progress Indicator
- [ ] Gradient Button
- [ ] Flexible Space Toolbar Item
- [x] Form
- [x] Label
- [ ] Pop Up Button
- [x] Push Button
- [ ] Radio Button
- [ ] Search Field
- [ ] Secure Text Field
- [x] Segmented Control
- [ ] Space Toolbar Item
- [x] Text Field
- [ ] Textured Rounded Button
- [x] Title Bar
- [x] Toolbar
- [x] Window

## Todos Windows

- [x] Button
- [x] Checkbox
- [ ] Determinate Progress Bar
- [x] Form
- [ ] Progress Bar
- [x] Progress Ring
- [x] Split View
- [x] Text Block
- [x] Text Box
- [x] Title Bar
- [x] Window

## Screenshots

### OS X El Capitan

<img src="https://raw.githubusercontent.com/gabrielbull/react-desktop/master/docs/screenshots/osx.png" width="655">

### Windows 10

<img src="https://raw.githubusercontent.com/gabrielbull/react-desktop/master/docs/screenshots/win.png" width="628">

## Usage

Simple usage:

```jsx
import React from 'react';
import {
  Window,
  TitleBar, 
  PushButton, 
  TextField, 
  Toolbar, 
  Box, 
  SegmentedControl,
  IndeterminateProgressWheel,
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
                  
                  <IndeterminateProgressWheel visible absolute/>
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
