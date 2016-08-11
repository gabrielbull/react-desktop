import React, { Component } from 'react';
import {
  Window,
  TitleBar,
  Checkbox,
  NavPane,
  NavPaneItem,
  TextInput,
  Text,
  View,
  ProgressCircle,
  Button
} from 'react-desktop/windows';
import * as Icons from './windows/assets/icons';
import picture from './picture.jpg';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'welcome',
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
      <Window ref="window" chrome theme="dark" color="#cc7f29" width="800px" height="600px">
        <TitleBar title="My Windows Application" controls/>

        <NavPane>
          <NavPaneItem
            title="Welcome"
            icon={Icons.welcomeIcon}
            selected={this.state.selectedTab === 'welcome'}
            onSelect={() => { this.setState({ selectedTab: 'welcome' }) }}
            color="#cc7f29"
            theme="light"
            push
            style={{
             height: '500px',
             backgroundImage: 'url(' + picture + ')',
             backgroundSize: 'cover'
           }}
          >
            <h1
              style={{
               position: 'absolute',
               top: '25%',
               left: '0px',
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
          </NavPaneItem>
          <NavPaneItem
            title="Forms"
            icon={Icons.formIcon}
            selected={this.state.selectedTab === 'form'}
            onSelect={() => { this.setState({ selectedTab: 'form' }) }}
            padding="40px 30px"
            color="#cc7f29"
            theme="light"
            background="#ffffff"
            push
          >
            <View layout="vertical">
              <Text color="red" hidden={!this.state.showError}>
                There was an error submitting this form.
              </Text>

              <View margin="0 0 20px 0" layout="vertical">
                <TextInput label="Label" defaultValue="" placeholder="TextField" style={{ width: '400px' }}/>
                <TextInput label="Longer Label" defaultValue="" placeholder="TextField" style={{ width: '400px' }}/>
              </View>

              <View margin="0 0 20px 0">
                <Checkbox label="Default checked" defaultChecked/>
              </View>

              <View horizontalAlignment="right">
                <ProgressCircle size={32} hidden={!this.state.showLoader} style={{ marginRight: '20px' }}/>
                <Button onClick={this.submit} type="submit" color push style={{ marginRight: '8px' }}>Submit</Button>
                <Button onClick={this.cancel}>Cancel</Button>
              </View>
            </View>
          </NavPaneItem>
        </NavPane>
      </Window>
    );
  }
}
