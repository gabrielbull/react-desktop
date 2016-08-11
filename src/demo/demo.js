import React, { Component } from 'react';
import WindowOSX from './window.osx';
import WindowWindows from './window.windows';
import OsToggle from '../shared/osToggle/osToggle';
import './demo.scss';
import Warning from '../warning/warning';

export default class extends Component {
  constructor() {
    super();
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    this.state = {
      hidden: !isChrome,
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

    if (this.state.hidden) {
      return (
        <div className="demo demo-warning">
          <Warning forceShow/>
        </div>
      );
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
