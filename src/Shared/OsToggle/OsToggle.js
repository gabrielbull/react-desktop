import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './OsToggle.scss';
import AppleSVG from './apple.svg';
import WindowsSVG from './windows.svg';

export default class extends Component {
  change() {
    if (this.refs.switch.checked) {
      this.props.onChange('win');
    } else {
      this.props.onChange('osx');
    }
  }

  render() {
    const checked = this.props.defaultValue === 'win';

    return (
      <div className="toggle">
        <div className="option">
          <span dangerouslySetInnerHTML={{__html: AppleSVG}} />
        </div>
        <div className="switch">
          <input ref="switch" id="toggle" type="checkbox" onChange={this.change.bind(this)} defaultChecked={checked}/>
          <label htmlFor="toggle"/>
        </div>
        <div className="option">
          <span dangerouslySetInnerHTML={{__html: WindowsSVG}} />
        </div>
      </div>
    );
  }
}
