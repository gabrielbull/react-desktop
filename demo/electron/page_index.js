import React from 'react';
import ReactDOM from 'react-dom';

import { Window, TitleBar, Text } from 'react-desktop/windows';

ReactDOM.render(<Window
  color={this.props.color}
  theme={this.props.theme}
  chrome
  height="300px"
  padding="12px">
  <TitleBar title="My Windows Application" controls/>
  <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
</Window>, document.querySelector('#content'));
