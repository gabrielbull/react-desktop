import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Window,
  TitleBar,
  Form,
  TextBlock,
  TextBox,
  Button,
  Checkbox,
  SplitView,
  IndeterminateProgressRing,
} from 'react-desktop/lib/Windows';
import * as Icons from './Windows/Assets/Icons';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'welcome'
    };
  }

  render() {
    return (
      <Window ref="window" chrome requestedTheme="dark">
        <TitleBar title="My Windows Application" controls/>

        <SplitView isOpen={this.state.isOpen} openLength={200} onPaneToggle={this.togglePane} push>
          <SplitView.Item
            title="Welcome"
            icon={Icons.welcomeIcon}
            selected={this.state.selectedTab === 'welcome'}
            onPress={() => { this.setState({ selectedTab: 'welcome' }) }}
            requestedTheme="light"
            background="#ffffff"
            style={{
              height: '500px',
              backgroundImage: 'url(/react-desktop/src/Demo/picture.jpg)',
              backgroundSize: 'cover'
            }}
          >
            <h1
              style={{
                position: 'absolute',
                top: '25%',
                left: '0',
                width: '100%',
                textAlign: 'center',
                lineHeight: '28px',
                fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
                fontSize: '45px',
                fontWeight: '100',
                color: '#333'
              }}
            >
              Welcome to React Desktop
            </h1>
          </SplitView.Item>
          <SplitView.Item
            title="Forms"
            icon={Icons.formIcon}
            selected={this.state.selectedTab === 'form'}
            onPress={() => { this.setState({ selectedTab: 'form' }) }}
            padding="40px 30px"
            requestedTheme="light"
            background="#ffffff"
          >
            <Form>
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
                <Checkbox label="Default checked" defaultChecked/>
              </Form.Row>

              <Form.Row>
                <Button onPress="submit" color push>Button With Color</Button>
                <Button push>Button</Button>

                <IndeterminateProgressRing size={32} color absolute/>
              </Form.Row>
            </Form>
          </SplitView.Item>
        </SplitView>
      </Window>
    );
  }
}
