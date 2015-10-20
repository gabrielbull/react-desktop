import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  Button,
  TextInput,
  TextBlock,
  Toolbar,
  Box,
  SegmentedControl,
  IndeterminateProgressWheel,
  Form,
  Label,
  Window,
  Desktop
} from '../src/index';

Desktop.os = 'win';

export class Window1 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div/>
    );
  }
}

export class Window2 extends Component {
  constructor() {
    super();
    this.state = {selectedTab: 'login'};
  }

  render() {
    return (
      <Window chrome style={{backgroundColor: '#f2f2f2'}}>
        <TitleBar title="TitleBar" controls/>

        <Form onSubmit={() => { alert('form submitted'); }}>
          <TextBlock color="red">
            There was an error submitting this form.
          </TextBlock>

          <Form.Row>
            <TextInput header="Label" defaultValue="" placeholder="TextField" style={{width: '400px'}}/>
          </Form.Row>

          <Form.Row>
            <TextInput header="Longer Label" defaultValue="" placeholder="TextField" style={{width: '400px'}}/>
          </Form.Row>

          <Form.Row>
            <Button onPress="submit" color="blue">Button Blue</Button>
            <Button>Button</Button>

            <IndeterminateProgressWheel absolute/>
          </Form.Row>
        </Form>
      </Window>
    );
  }
}
