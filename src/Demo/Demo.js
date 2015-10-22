import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WindowOSX from './Window.osx';
import WindowWindows from './Window.windows';
import OsToggle from '../Shared/OsToggle/OsToggle';
import style from './Demo.scss';

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
        {window}
      </div>
    );
  }
}
