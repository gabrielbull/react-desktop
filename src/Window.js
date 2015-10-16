import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Window,
  TitleBar,
  PushButton,
  TextField,
  Toolbar,
  Box,
  SegmentedControl,
  IndeterminateCircularProgressIndicator,
  Form,
  Label
} from 'react-desktop';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'segmented',
      load: false
    };
  }

  submit() {
    this.refs.error.setState({display: false});
    this.refs.loader.setState({visible: true});
    setTimeout(function () {
      this.refs.loader.setState({visible: false});
      this.refs.error.setState({display: true});
    }.bind(this), 2000);
  }

  cancel() {
    this.refs.error.setState({display: false});
    this.refs.loader.setState({visible: false});
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
              title="Segmented"
              selected={this.state.selectedTab === 'segmented'}
              onPress={() => { this.setState({ selectedTab: 'segmented' }) }}
              className="form"
            >
              <Form onSubmit={this.submit.bind(this)}>
                <Label ref="error" color="red" align="center" display={false}>
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
                  <PushButton onPress={this.cancel.bind(this)}>PushButton</PushButton>
                  <PushButton onPress="submit" color="blue">PushButton Blue</PushButton>

                  <IndeterminateCircularProgressIndicator ref="loader" absolute visible={false}/>
                </Form.Row>
              </Form>
            </SegmentedControl.Item>

            <SegmentedControl.Item
              title="Control"
              selected={this.state.selectedTab === 'control'}
              onPress={() => { this.setState({ selectedTab: 'control' }) }}
            >
              <Label>Hello World</Label>
            </SegmentedControl.Item>
          </SegmentedControl>
        </Box>
      </Window>
    );
  }
}
