import React, { Component } from 'react';
import {
  Window,
  TitleBar,
  TextInput,
  Toolbar,
  SegmentedControl,
  SegmentedControlItem,
  ProgressCircle,
  Checkbox,
  Radio,
  View,
  Button,
  Text,
  Label
} from 'react-desktop/macOs';

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

  cancel = () => {
    this.setState({ showLoader: false, showError: false });
  };

  render() {
    return (
      <Window chrome width="800px" height="600px">
        <TitleBar title="My Mac OS Application" controls>
          <Toolbar/>
        </TitleBar>

        <SegmentedControl box>
          <SegmentedControlItem
            title="Forms"
            selected={this.state.selectedTab === 'segmented'}
            onSelect={() => this.setState({ selectedTab: 'segmented' })}
          >
            <View horizontalAlignment="center" layout="vertical">
              <Label color="red" width="300px" margin="0 0 10px 0" hidden={!this.state.showError}>
                There was an error submitting this form.
              </Label>

              <TextInput
                width="300px"
                label="This is an input"
                placeholder="My Input"
                margin="0 0 10px 0"
                onChange={this.change}
              />

              <View width="300px" margin="0 0 10px 0" layout="vertical">
                <Radio
                  label="This is a radio button"
                  name="radio1"
                  defaultChecked
                />
                <Radio
                  label="This is another radio button"
                  name="radio1"
                />
              </View>

              <View width="300px" layout="vertical">
                <Checkbox
                  label="This is a checkbox"
                  defaultChecked
                />
                <Checkbox
                  label="This is another checkbox"
                />
              </View>

              <View margin="14px 0 0 0">
                <Button onClick={this.cancel} style={{ marginRight: '10px' }}>
                  Cancel
                </Button>
                <Button type="submit" color="blue" onClick={this.submit}>
                  Submit
                </Button>
                <ProgressCircle
                  hidden={!this.state.showLoader}
                  style={{ position: 'absolute', right: '-26px', top: '3px' }}
                />
              </View>
            </View>
          </SegmentedControlItem>
          <SegmentedControlItem
            title="Example"
            selected={this.state.selectedTab === 'example'}
            onSelect={() => this.setState({ selectedTab: 'example' })}
          >
            <Text>Hello World</Text>
          </SegmentedControlItem>
        </SegmentedControl>
      </Window>
    );
  }
}
