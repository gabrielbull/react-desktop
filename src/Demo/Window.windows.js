import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Window,
  TitleBar,
  Form,
  TextBlock,
  TextBox,
  Button,
  IndeterminateProgressRing,
} from 'react-desktop/lib/Windows';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      load: false
    };
  }

  submit() {
    this.refs.submit.setState({display: false});
    this.refs.button.setState({display: false});
    this.refs.error.setState({display: false});
    this.refs.loader.setState({visible: true});
    setTimeout(function () {
      this.refs.submit.setState({display: true});
      this.refs.button.setState({display: true});
      this.refs.error.setState({display: true});
      this.refs.loader.setState({visible: false});
    }.bind(this), 4000);
  }

  cancel() {
    this.refs.submit.setState({display: true});
    this.refs.button.setState({display: true});
    this.refs.error.setState({display: false});
    this.refs.loader.setState({visible: false});
  }

  render() {
    return (
      <Window chrome style={{backgroundColor: '#f2f2f2'}}>
        <TitleBar title="Windows" controls/>

        <Form onSubmit={this.submit.bind(this)}>
          <TextBlock ref="error" color="red" display={false}>
            There was an error submitting this form.
          </TextBlock>

          <Form.Row>
            <TextBox header="Label" defaultValue="" placeholder="TextField" style={{width: '400px'}}/>
          </Form.Row>

          <Form.Row>
            <TextBox header="Longer Label" defaultValue="" placeholder="TextField" style={{width: '400px'}}/>
          </Form.Row>

          <Form.Row sty>
            <Button ref="submit" onPress="submit" color="blue">Button Blue</Button>
            <Button ref="button" onPress={this.cancel.bind(this)}>Button</Button>
            <IndeterminateProgressRing style={{zoom: 2}} ref="loader" visible={false}/>
          </Form.Row>

        </Form>
      </Window>
    );
  }
}
