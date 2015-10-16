import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WindowOSX from './Window';
import WindowWindows from './Window.windows';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      os: 'osx'
    };
  }

  changeOs() {
    if (this.refs.switch.checked) {
      this.setState({os: 'win'});
    } else {
      this.setState({os: 'osx'});
    }
  }

  render() {
    let Window;
    if (this.state.os === 'osx') {
      Window = WindowOSX;
    } else {
      Window = WindowWindows;
    }

    return (
      <div>
        <div className="toggle">
          <div className="option">
            OS X
          </div>
          <div className="switch">
            <input ref="switch" id="toggle" type="checkbox" onChange={this.changeOs.bind(this)}/>
            <label htmlFor="toggle"/>
          </div>
          <div className="option">
            Windows
          </div>
        </div>

        <Window/>
      </div>
    );
  }
}
