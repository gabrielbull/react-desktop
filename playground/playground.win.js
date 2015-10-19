import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  Button,
  TextInput,
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
      <Window chrome style={{marginBottom: '60px'}}>
        <TitleBar
          title="TitleBar"
          controls
          onClosePress={() => { alert('close'); }}
          onMinimizePress={() => { alert('minimize'); }}
          onMaximizePress={() => { alert('mazimize'); }}
        />
      </Window>
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
      <Window chrome>
        <TitleBar title="TitleBar with Toolbar" controls>
          <Toolbar/>
        </TitleBar>

        <Form onSubmit={() => { alert('form submitted'); }}>
          <Label color="red" align="center">
            There was an error submitting this form.
          </Label>

          <Form.Row>
            <TextInput header="Label" defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
          </Form.Row>

          <Form.Row>
            <Label>Longer label:</Label>
            <TextInput defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
          </Form.Row>

          <Form.Row>
            <Button>Button</Button>
            <Button onPress="submit" color="blue">Button Blue</Button>

            <IndeterminateProgressWheel absolute/>
          </Form.Row>
        </Form>
      </Window>
    );
  }
}
