import React, { Component } from 'react';
import ColorPicker from 'react-color';
import examples from 'examples';
import Examples from '../examples/examples';
import Logo from './logo';

const styles = {
  sidebar: {
    backgroundColor: 'rgba(0,0,0,.8)',
    height: '100%'
  }
};

class Sidebar extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      example: null,
      color: localStorage['color'] ? localStorage['color'] : '#cc7f29',
      displayColorPicker: false,
      os: localStorage['os'] ? localStorage['os'] : 'osx',
      theme: localStorage['theme'] ? localStorage['theme'] : 'light'
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  changeColor = (color) => {
    this.setState({ color: `#${color.hex}`, displayColorPicker: false });
    if (this.window2.refs.window) {
      this.window2.refs.window.setState({
        color: this.state.color
      });
    }
    localStorage['color'] = this.state.color;
  };

  changeOs = (event) => {
    this.setState({ os: event.target.value });
    localStorage['os'] = event.target.value;
  };

  toggleTheme = () => {
    this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
    if (this.window2.refs.window) {
      this.window2.refs.window.setState({
        requestedTheme: this.state.theme
      });
    }
    localStorage['theme'] = this.state.theme;
  };

  render() {
    const isChecked = this.state.theme === 'dark';

    return (
      <div style={{ ...styles.sidebar, ...this.props.style }}>
        <Logo/>

        <h1
          style={{
            margin: 0,
            padding: '10px',
            fontFamily: 'sans-serif',
            color: 'white',
            fontSize: '16px',
            letterSpacing: '0.7px',
            textTransform: 'uppercase',
            fontWeight: 'normal'
          }}
        >
          Playground
        </h1>

        <select value={this.state.os} onChange={this.changeOs.bind(this)} style={{ margin: '10px' }}>
          <option value="osx">OS X</option>
          <option value="win">Windows</option>
        </select>

        <br/>

        <label style={{ margin: '10px', fontFamily: 'sans-serif', color: 'white', fontSize: '11px', clear: 'both' }}>
          <input type="checkbox" onChange={this.toggleTheme.bind(this)} defaultChecked={isChecked}/>
          Dark Theme
        </label>

        <div style={{ margin: '10px' }}>
          <a
            style={{
              height: '16px',
              width: '16px',
              display: 'block',
              border: '2px solid rgba(255, 255, 255, 1)',
              borderRadius: '3px',
              backgroundColor: this.state.color,
              float: 'left'
            }}
            onClick={this.handleClick}
          />
          <span style={{ margin: '10px', fontFamily: 'sans-serif', color: 'white', fontSize: '11px' }}>
            Color
          </span>
          <ColorPicker
            display={this.state.displayColorPicker}
            color={this.state.color}
            onChangeComplete={this.changeColor}
            type="sketch"
          />
        </div>

        {this.renderExamples()}
      </div>
    );
  }

  renderExamples() {
    let list = {};
    for (var prop in examples) {
      if (examples.hasOwnProperty(prop)) {
        let path = prop.replace(/^\/examples\//, '').split('/');
        let currentList = list;
        path.forEach((item, index) => {
          if (index === path.length - 1) currentList[item] = examples[prop];
          else if (typeof currentList[item] === 'undefined') currentList[item] = {};
          currentList = currentList[item];
        });
      }
    }

    return <Examples list={list}/>;
  }
}

export default Sidebar;
