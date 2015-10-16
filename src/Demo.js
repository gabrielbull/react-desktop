import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WindowOSX from './Window';
import WindowWindows from './Window.windows';
import TransitionGroup from 'react-addons-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    let window;
    if (this.state.os === 'osx') {
      window = (<div key="osx"><WindowOSX/></div>);
    } else {
      window = (<div key="win"><WindowWindows/></div>);
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

        <ReactCSSTransitionGroup style={{position: 'relative'}} transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {window}
        </ReactCSSTransitionGroup>
      </div>
    );
  }//<Window/>
}
