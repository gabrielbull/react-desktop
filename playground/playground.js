import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/Button';
import TextInput from '../src/TextInput';

ReactDOM.render(
  (
    <div>
      <TextInput defaultValue="" placeholder="Username"/>
      <Button>Cancel</Button>
      <Button color="blue">Submit</Button>
    </div>
  ),
  document.getElementById('main')
);
