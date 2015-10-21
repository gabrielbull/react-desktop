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
    const background = this.props.theme === 'dark' ? '#1f1f1f' : 'white';

    return (
      <Window ref="window" background={background} color="#cc7f29" chrome requestedTheme={this.props.theme}>
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
            <Button onPress="submit" color push>Button With Color</Button>
            <Button push>Button</Button>

            <IndeterminateProgressRing size={32} color absolute/>
          </Form.Row>
        </Form>
      </Window>
    );
  }
}
