import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './OsToggle.scss';

export default class extends Component {
  change() {
    if (this.refs.switch.checked) {
      this.props.onChange('win');
    } else {
      this.props.onChange('osx');
    }
  }

  render() {
    return (
      <div className="toggle">
        <div className="option">
          OS X
        </div>
        <div className="switch">
          <input ref="switch" id="toggle" type="checkbox" onChange={this.change.bind(this)}/>
          <label htmlFor="toggle"/>
        </div>
        <div className="option">
          Windows
        </div>
      </div>
    );
  }
}
