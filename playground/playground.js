import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  Button,
  TextInput,
  Toolbar,
  Box,
  SegmentedControl,
  IndeterminateProgressWheel,
  Form,
  Label,
  Window,
  Desktop
} from '../src/index';
import {Window1 as Window1OSX, Window2 as Window2OSX} from './playground.osx';
import {Window1 as Window1Win, Window2 as Window2Win} from './playground.win';

document.title = 'React Desktop Playground';
document.body.style.padding = '30px 40px';
document.body.style.background = 'white';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

document.body.innerHTML = `
  <div id="controls" style="position: absolute; height: 100%; top: 0; left: 0;"></div>
  <div id="window1" style="width: 600px;"></div>
  <div id="window2" style="width: 600px;"></div>
  <script src="/.js"></script>
`;

class Switch extends Component {
  constructor() {
    super();
    this.state = {
      os: localStorage['os'] ? localStorage['os'] : 'osx'
    };
  }

  componentDidMount() {
    this.renderWindows();
  }

  componentDidUpdate() {
    this.renderWindows();
  }

  changeOs(event) {
    this.setState({os: event.target.value});
    localStorage['os'] = event.target.value;
  }

  render() {
    return (
      <div style={{backgroundColor: 'rgba(0,0,0,.8)', 'height': '100%'}}>
        <select value={this.state.os} onChange={this.changeOs.bind(this)} style={{margin: '10px'}}>
          <option value="osx">OS X</option>
          <option value="win">Windows</option>
        </select>
      </div>
    );
  }

  renderWindows() {
    if (this.state.os === 'osx') {
      ReactDOM.render(<Window1OSX/>, document.getElementById('window1'));
      ReactDOM.render(<Window2OSX/>, document.getElementById('window2'));
    } else {
      ReactDOM.render(<Window1Win/>, document.getElementById('window1'));
      ReactDOM.render(<Window2Win/>, document.getElementById('window2'));
    }
  }
}

ReactDOM.render(<Switch/>, document.getElementById('controls'));
