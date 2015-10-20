import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  Button,
  TextBox,
  TextBlock,
  IndeterminateProgressRing,
  Form,
  Window,
  Checkbox,
} from '../src/Windows';

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
            <TextBox header="Label" defaultValue="" placeholder="TextField" style={{width: '400px'}}/>
          </Form.Row>

          <Form.Row>
            <TextBox header="Longer Label" defaultValue="" placeholder="TextField" style={{width: '400px'}}/>
          </Form.Row>

          <Form.Row>
            <Checkbox label="Test label"/>
          </Form.Row>
          <Form.Row>
            <Checkbox label="Default checked" defaultChecked/>
          </Form.Row>

          <Form.Row>
            <Button onPress="submit" color="blue">Button Blue</Button>
            <Button>Button</Button>

            <IndeterminateProgressRing absolute/>
          </Form.Row>
        </Form>
      </Window>
    );
  }
}
