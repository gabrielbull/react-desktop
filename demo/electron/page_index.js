import React from 'react';
import ReactDOM from 'react-dom';

import { Window, TitleBar } from 'react-desktop/windows';
import Button from '@material-ui/core/Button';

ReactDOM.render(<Window
  chrome
  height="600px"
  width="800px"
  padding="12px">
  <TitleBar title="My Windows Application" controls onCloseClick={() => process.exit()}/>
  <div>
    <Button color="primary" variant="outlined">
      {'Hello world!'}
    </Button>
  </div>
</Window>, document.querySelector('#content'));
