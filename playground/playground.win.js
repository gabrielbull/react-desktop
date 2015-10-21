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
  SplitView
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
  render() {
    return (
      <Window ref="window" chrome requestedTheme={this.props.theme}>
        <TitleBar title="TitleBar" controls/>

        <SplitView>
          <SplitView.View>

          </SplitView.View>
        </SplitView>

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
            <Button onPress="submit" color="blue">Button Blue</Button>
            <Button>Button</Button>

            <IndeterminateProgressRing size={32} absolute/>
          </Form.Row>
        </Form>
      </Window>
    );
  }
}
