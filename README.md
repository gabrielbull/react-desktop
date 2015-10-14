# React Desktop

[![Build Status](https://travis-ci.org/gabrielbull/react-desktop.svg)](https://travis-ci.org/gabrielbull/react-desktop)
[![Code Climate](https://codeclimate.com/github/gabrielbull/react-desktop/badges/gpa.svg)](https://codeclimate.com/github/gabrielbull/react-desktop)
[![Dependency Status](https://david-dm.org/gabrielbull/react-desktop.svg)](https://david-dm.org/gabrielbull/react-desktop)
[![devDependency Status](https://david-dm.org/gabrielbull/react-desktop/dev-status.svg)](https://david-dm.org/gabrielbull/react-desktop#info=devDependencies)
[![npm downloads](http://img.shields.io/npm/dt/react-desktop.svg)](https://www.npmjs.org/package/react-desktop)
[![npm version](https://img.shields.io/npm/v/react-desktop.svg)](https://www.npmjs.org/package/react-desktop)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gabrielbull/react-desktop?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

React UI Components for OS X and Windows.

## Contributing

This library is in it's infancy and was created to fulfill the lack of such libraries for tools like node-webkit or
Electron.js. As such, everyone is welcome to contribute and add more components.

### Todos OS X

- [x] Push Button
- [ ] Textured Rounded Button
- [ ] Gradient Button
- [ ] Pop Up Button
- [ ] Check Box Button
- [ ] Radio Button
- [x] Text Field
- [ ] Search Field
- [ ] Secure Text Field
- [x] Title Bar
- [x] Toolbar
- [ ] Space Toolbar Item
- [ ] Flexible Space Toolbar Item
- [x] Box
- [x] Segmented Control

### Todos Windows

- [ ] Button
- [ ] TextInput
- [ ] TitleBar
- [ ] Toolbar

## Screenshots

<img src="https://raw.githubusercontent.com/gabrielbull/react-desktop/master/docs/screenshots/osx.png" width="600">

## Usage

Simple usage:

```jsx
import { TitleBar, PushButton, TextField, Toolbar, Box } from 'react-desktop';

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = { selectedTab: 'login' };
  }

  render() {
    return (
      <div>
        <TitleBar title="Page" controls={true}/>
        
        <TitleBar title="TitleBar with Toolbar" controls={true}>
          <Toolbar/>
        </TitleBar>
        
        <Box>
          <SegmentedControl>
            <SegmentedControl.Item 
              title="Login"
              selected={this.state.selectedTab === 'login'}
              onPress={() => { this.setState({ selectedTab: 'login' }) } }
            >
              
              <TextField defaultValue="" placeholder="Username"/>
            
              <PushButton>Cancel</PushButton>
              <PushButton color="blue">Submit</PushButton>
              
            </SegmentedControl.Item>
          </SegmentedControl>
        </Box>
      </div>
    );
  }
}
```

