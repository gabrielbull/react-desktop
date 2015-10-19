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

document.title = 'React Desktop Playground';
document.body.style.padding = '30px 40px';
document.body.style.background = 'white';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

document.body.innerHTML = `
  <div id="window1" style="width: 600px;"></div>
  <div id="window2" style="width: 600px;"></div>
  <script src="/.js"></script>
`;

Desktop.os = 'win';

class Window1 extends Component {
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


class Window2 extends Component {
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
            <Label>Label:</Label>
            <TextInput defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
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

ReactDOM.render(<Window1/>, document.getElementById('window1'));
ReactDOM.render(<Window2/>, document.getElementById('window2'));
