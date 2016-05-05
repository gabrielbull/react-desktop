import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Window,
  TitleBar,
  //PushButton,
  TextInput,
  Toolbar,
  SegmentedControl,
  ProgressCircle,
  //Form,
  Checkbox,
  Radio,
  View,
  Button,
  Label
} from 'react-desktop/osx';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'segmented',
      showLoader: false,
      showError: false
    };
  }

  submit = () => {
    this.setState({ showLoader: true, showError: false });
    setTimeout(() => {
      this.setState({ showLoader: false, showError: true });
    }, 2000);
  };

  cancel() {
    this.refs.error.setState({display: false});
    this.refs.loader.setState({visible: false});
  }

  render() {
    return (
      <Window chrome width="800px" height="600px">
        <TitleBar title="My Mac OS Application" controls>
          <Toolbar/>
        </TitleBar>

        <SegmentedControl box>
          <SegmentedControl.Item
            title="Segmented"
            selected={this.state.selectedTab === 'segmented'}
            onSelect={() => this.setState({ selectedTab: 'segmented' })}
          >
            <View horizontalAlignment="center">
              <Label color="red" width="300px" margin="0 0 10px 0" hidden={!this.state.showError}>
                There was an error submitting this form.
              </Label>

              <TextInput
                width="300px"
                label="My Input"
                placeholder="My Input"
                margin="0 0 10px 0"
                onChange={this.change}
              />

              <View width="300px">
                <Radio
                  label="Check me!"
                  name="radio1"
                  onChange={(e) => console.log(e.target.value)}
                  defaultValue="I got checked!"
                  defaultChecked
                />
                <Radio
                  label="Check me!"
                  name="radio1"
                  onChange={(e) => console.log(e.target.value)}
                  defaultValue="I got checked!"
                />
              </View>

              <View direction="row" margin="14px 0 0 0">
                <Button style={{ marginRight: '10px' }}>
                  Cancel
                </Button>
                <Button color="blue" onClick={this.submit}>
                  Submit
                </Button>
                <ProgressCircle
                  hidden={!this.state.showLoader}
                  style={{ position: 'absolute', marginLeft: '10px', marginTop: '3px' }}
                />
              </View>
            </View>
          </SegmentedControl.Item>
        </SegmentedControl>
      </Window>
    );
  }
}
/*
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
 </Box>*/
