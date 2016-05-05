import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WindowOSX from './window.osx';
import WindowWindows from './window.windows';
import OsToggle from '../shared/osToggle/osToggle';
import style from './demo.scss';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      os: localStorage['demo.os'] == 'win' ? 'win' : 'osx'
    };
  }

  componentDidMount() {
    document.body.className = 'demo-background';
  }

  componentWillUnmount() {
    document.body.className = '';
  }

  changeOs(os) {
    localStorage['demo.os'] = os;
    this.setState({ os: os });
  }

  render() {
    let window;
    if (this.state.os === 'osx') {
      window = (<div key="osx"><WindowOSX/></div>);
    } else {
      window = (<div key="win"><WindowWindows/></div>);
    }

    return (
      <div className="demo">
        <OsToggle defaultValue={this.state.os} onChange={this.changeOs.bind(this)}/>
        <div className="demo-window">
          {window}
        </div>
      </div>
    );
  }
}
