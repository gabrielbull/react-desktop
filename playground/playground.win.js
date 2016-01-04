import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  Button,
  TextBox,
  TextBlock,
  ProgressRing,
  Form,
  Window,
  Checkbox,
  SplitView,
  View,
  ListView
} from '../src/Windows';
import * as Icons from './Windows/Assets/Icons';

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
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
    };
  }

  render() {
    return (
      <Window
        ref="window"
        color={this.state.color}
        chrome
        theme={this.props.theme}
        storage={localStorage}
        style={{ width: '1000px', height: '600px' }}
      >
        <TitleBar title="My Windows Application" controls/>

        <SplitView isOpen openLength={200} push persistIsOpen persistSelectedItem>
          <SplitView.Item
            title="Welcome"
            icon={Icons.home}
            theme="light"
            background="#ffffff"
            style={{
              backgroundImage: 'url(picture.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom center'
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
            icon={Icons.form}
            padding="40px 30px"
            theme="light"
            background="#ffffff"
          >
            <Form>
              <TextBlock color="red">
                There was an error submitting this form.
              </TextBlock>

              <Form.Row>
                <TextBox header="Label" defaultValue="" placeholder="TextField" style={{ width: '400px' }}/>
              </Form.Row>

              <Form.Row>
                <TextBox header="Longer Label" defaultValue="" placeholder="TextField" style={{ width: '400px' }}/>
              </Form.Row>

              <Form.Row>
                <Checkbox label="Default checked" defaultChecked/>
              </Form.Row>

              <Form.Row>
                <Button onPress="submit" color push>Button With Color</Button>
                <Button push>Button</Button>
              </Form.Row>
            </Form>
          </SplitView.Item>
          <SplitView.Item
            title="Progress"
            icon={Icons.progress}
            padding="40px 30px"
            theme="light"
            background="#ffffff"
          >
            <View horizontalAlignment="center" verticalAlignment="center">
              <ProgressRing size={60} color/>
            </View>
          </SplitView.Item>
          <SplitView.Item
            title="List View"
            icon={Icons.listView}
            theme="light"
            background="#ffffff"
          >
            <MasterDetails detailsWidth="200" push theme={this.props.theme === 'dark' ? 'light' : 'dark'}>
              <MasterDetails.Item>
                <MasterDetails.Item.Master>
                  Erv
                </MasterDetails.Item.Master>
                {this.renderDetails('Hi')}
              </MasterDetails.Item>
              <MasterDetails.Item>
                <MasterDetails.Item.Master>
                  Hello2
                </MasterDetails.Item.Master>
                {this.renderDetails('Hello')}
              </MasterDetails.Item>
              <MasterDetails.Item>
                <MasterDetails.Item.Master>
                  Hello3
                </MasterDetails.Item.Master>
                {this.renderDetails('Hello2')}
              </MasterDetails.Item>
            </MasterDetails>
          </SplitView.Item>
        </SplitView>
      </Window>
    );
  }

  renderDetails(text) {
    return (
      <ListView.Item.Details background>
        <View padding="20px 30px">
          <TextBlock color="white">{text}</TextBlock>
        </View>
      </ListView.Item.Details>
    );
  }
}
