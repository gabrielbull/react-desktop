import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  PushButton,
  TextField,
  Toolbar,
  Box,
  SegmentedControl,
  IndeterminateCircularProgressIndicator,
  Form,
  Label,
  Windows,
  Window,
  Desktop
} from '../src/Main';

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

class Window1 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Windows.Window chrome style={{marginBottom: '60px'}}>
        <Windows.TitleBar
          title="TitleBar"
          controls
          onClosePress={() => { alert('close'); }}
          onMinimizePress={() => { alert('minimize'); }}
          onMaximizePress={() => { alert('mazimize'); }}
        />
      </Windows.Window>
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

        <Box className="box">
          <SegmentedControl>
            <SegmentedControl.Item
              title="Selected"
              selected={this.state.selectedTab === 'login'}
              onPress={() => { this.setState({ selectedTab: 'login' }) }}
              className="form"
            >
              <Form onSubmit={() => { alert('form submitted'); }}>
                <Label color="red" align="center">
                  There was an error submitting this form.
                </Label>

                <Form.Row>
                  <Label>Label:</Label>
                  <TextField defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
                </Form.Row>

                <Form.Row>
                  <Label>Longer label:</Label>
                  <TextField defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
                </Form.Row>

                <Form.Row>
                  <PushButton>PushButton</PushButton>
                  <PushButton onPress="submit" color="blue">PushButton Blue</PushButton>

                  <IndeterminateCircularProgressIndicator absolute/>
                </Form.Row>
              </Form>
            </SegmentedControl.Item>

            <SegmentedControl.Item
              title="Segmented"
              selected={this.state.selectedTab === 'segmented'}
              onPress={() => { this.setState({ selectedTab: 'segmented' }) }}
            >
              <Label>Hello World</Label>
            </SegmentedControl.Item>

            <SegmentedControl.Item
              title="Control"
              selected={this.state.selectedTab === 'control'}
              onPress={() => { this.setState({ selectedTab: 'control' }) }}
            >
              <Label>Goodbye World</Label>
            </SegmentedControl.Item>
          </SegmentedControl>
        </Box>
      </Window>
    );
  }
}

ReactDOM.render(<Window1/>, document.getElementById('window1'));
ReactDOM.render(<Window2/>, document.getElementById('window2'));
