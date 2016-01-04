import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import {Window1 as Window1OSX, Window2 as Window2OSX} from './playground.osx';
import {Window1 as Window1Win, Window2 as Window2Win} from './playground.win';
import ColorPicker from 'react-color';

document.title = 'React Desktop Playground';
document.body.style.padding = '30px 40px';
document.body.style.background = 'white';
document.body.style.backgroundImage = 'url(el-capitan-2.jpg)';
document.body.style.backgroundSize = 'cover';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

/*
var script = document.createElement('script');
script.src = '/webpack-dev-server.js';
document.getElementsByTagName('head')[0].appendChild(script);
*/

document.body.innerHTML = `
  <div id="controls" style="position: fixed; height: 100%; top: 0; left: 0;"></div>
  <div id="window1" style="width: 1000px;"></div>
  <div id="window2" style="width: 1000px;"></div>
  <script src="/.js"></script>
`;

class Switch extends Component {
  constructor() {
    super();
    this.state = {
      color: localStorage['color'] ? localStorage['color'] : '#cc7f29',
      displayColorPicker: false,
      os: localStorage['os'] ? localStorage['os'] : 'osx',
      theme: localStorage['theme'] ? localStorage['theme'] : 'light'
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

  toggleTheme() {
    this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
    if (this.window2.refs.window) {
      this.window2.refs.window.setState({
        requestedTheme: this.state.theme
      });
    }
    localStorage['theme'] = this.state.theme;
  }

  render() {
    const isChecked = this.state.theme === 'dark';

    return (
      <div style={{backgroundColor: 'rgba(0,0,0,.8)', width: '140px', 'height': '100%'}}>
        <svg x="0px" y="0px" viewBox="0 0 302.6 49.2" width="116" height="20" style={{padding: '10px 10px 0 10px'}}>
          <g>
            <path fill="#ffffff" d="M85.3,37.9c-5-9.4-5.8-10.8-7.1-11.2h-4.4v11.2h-3.6V11.9c2.5-0.1,5.3-0.2,8-0.2c5,0,8.1,2.8,8.1,6.8
		c0,4.1-2.9,6.2-4.6,7c1.5,0.8,2.4,2.1,7.9,12.5H85.3z M76.6,14.6h-2.8v9.2h5.7c1.7-0.7,3.1-2.6,3.1-4.6
		C82.6,16.3,80.5,14.6,76.6,14.6z"/>
            <path fill="#ffffff" d="M107,28.7H94.4c0,3.6,2,6.7,6,6.7c2.2,0,4.2-0.5,6.3-1.5l-0.2,2.9c-2,1-4.1,1.5-6.8,1.5
		c-5.4,0-8.6-4.2-8.6-9.7c0-6.2,3.9-10.3,8.8-10.3c4.7,0,7.3,3.4,7.3,7.7C107.2,26.8,107.1,28.1,107,28.7z M99.4,21.1
		c-2.7,0-4.4,2.6-4.8,5.1h9.4C104,23.3,102.2,21.1,99.4,21.1z"/>
            <path fill="#ffffff" d="M126.1,37.9c-0.5,0.2-1.3,0.3-2,0.3c-1.5,0-2.6-0.7-2.9-2.3H121c-1.3,1.3-3.2,2.4-5.8,2.4
		c-3,0-5.3-2-5.3-4.9c0-3.5,3-6.7,11-7.1V24c0-1.7-1-2.8-2.8-2.8c-1.9,0-4.4,0.9-6.5,2.3l-0.3-2.6c2.1-1.5,4.8-2.5,7.9-2.5
		c3.1,0,5.2,1.8,5.2,4.9c0,1.2-0.1,8.9-0.1,9.7c0,1.5,0.7,2.3,2.2,2.4L126.1,37.9z M120.8,28.8c-6.2,0.3-7.6,2.6-7.6,4.1
		c0,1.6,1.1,2.7,3.3,2.7c1.7,0,3.4-0.8,4.4-1.7V28.8z"/>
            <path fill="#ffffff" d="M143,22.7c-1.3-0.7-3.2-1.4-5.1-1.4c-3.4,0-5.8,3.1-5.8,6.8c0,4.1,2.1,7.2,6,7.2c2,0,3.7-0.6,5.3-1.3
		l-0.2,3c-1.8,0.9-3.8,1.3-5.9,1.3c-5.5,0-8.7-4.1-8.7-9.6c0-6,3.9-10.3,9.5-10.3c2.2,0,3.9,0.6,5.3,1.4L143,22.7z"/>
            <path fill="#ffffff" d="M152.5,38.3c-3.1,0-5-2-5-4.8c0-1.2,0-6.7,0-10.3v-1.6h-1.7v-1.4l4.6-5.1h0.4v3.7h6.1v2.8h-6.1
		c0,0,0,7.4,0,10.7c0,2,1,3,3,3c1,0,2.1-0.1,3.3-0.5v2.5C155.8,37.9,154.2,38.3,152.5,38.3z"/>
            <path fill="#ffffff" d="M177.4,38c-2.4,0-5.4,0-7.7-0.1V11.9c2.6-0.1,6-0.2,8.6-0.2c8,0,14.2,4.6,14.2,12.3
		C192.5,33.2,186.2,38,177.4,38z M177.3,14.6h-4V35h4.7c6.1,0,10.8-3.5,10.8-10.2C188.8,18.1,184.3,14.6,177.3,14.6z"/>
            <path fill="#ffffff" d="M211.6,28.7H199c0,3.6,2,6.7,6,6.7c2.2,0,4.2-0.5,6.3-1.5l-0.2,2.9c-2,1-4.1,1.5-6.8,1.5
		c-5.4,0-8.6-4.2-8.6-9.7c0-6.2,3.9-10.3,8.8-10.3c4.7,0,7.3,3.4,7.3,7.7C211.8,26.8,211.7,28.1,211.6,28.7z M204,21.1
		c-2.7,0-4.4,2.6-4.8,5.1h9.4C208.6,23.3,206.8,21.1,204,21.1z"/>
            <path fill="#ffffff" d="M219.7,38.3c-2.2,0-3.9-0.5-5.3-1.5l0.5-2.9c1.3,1,3.3,1.6,5.2,1.6c1.7,0,3.6-0.7,3.6-2.6
		c0-3.8-8.6-3-8.6-8.9c0-3.7,3.3-5.6,6.9-5.6c1.7,0,3.4,0.5,4.6,1.1l-0.5,2.8c-1.3-0.6-3-1.1-4.6-1.1c-1.6,0-3.1,0.8-3.1,2.3
		c0,3.8,8.7,3,8.7,8.8C227.2,36.5,223.5,38.3,219.7,38.3z"/>
            <path fill="#ffffff"
                  d="M243.1,37.9l-7.1-9.7h-0.8v9.7h-3.4V8h3.4v18.9c1.2-1.2,7.4-8,7.4-8h4.6l-8.4,8l8.4,11.1H243.1z"/>
            <path fill="#ffffff" d="M255.5,38.3c-3.1,0-5-2-5-4.8c0-1.2,0-6.7,0-10.3v-1.6h-1.7v-1.4l4.6-5.1h0.4v3.7h6.1v2.8h-6.1
		c0,0,0,7.4,0,10.7c0,2,1,3,3,3c1,0,2.1-0.1,3.3-0.5v2.5C258.9,37.9,257.3,38.3,255.5,38.3z"/>
            <path fill="#ffffff" d="M270.8,38.3c-5.3,0-8.7-4.3-8.7-9.7c0-5.8,3.8-10.2,9.5-10.2c5.3,0,8.7,4.3,8.7,9.7
		C280.3,33.9,276.6,38.3,270.8,38.3z M271.2,21.2c-3.4,0-5.6,3.1-5.6,6.9c0,3.9,2.2,7.4,5.7,7.4c3.4,0,5.6-3.1,5.6-7
		C276.9,24.7,274.8,21.2,271.2,21.2z"/>
            <path fill="#ffffff" d="M291.3,38.2c-1.2,0-2.5-0.3-3.3-0.7v10.2h-3.4V19l3.3-0.3l-0.1,2.1h0.2c1.3-1.4,3.3-2.4,5.3-2.4
		c4.9,0,7.9,4.1,7.9,9.6C301.2,34,297.3,38.2,291.3,38.2z M292.2,21.3c-1.6,0-3.1,0.5-4.1,1.3v11.7c1,0.7,2.5,1.1,3.8,1.1
		c3.6,0,5.9-3,5.9-6.9C297.7,24.1,295.7,21.3,292.2,21.3z"/>
          </g>
          <g>

            <rect x="19.3" y="2.2" transform="matrix(0.7071 0.7071 -0.7071 0.7071 12.5509 -15.1816)" fill="#9B61A8"
                  width="10.7" height="10.7"/>

            <rect x="10.7" y="4.5" transform="matrix(0.9659 0.2588 -0.2588 0.9659 3.0954 -3.8265)" fill="#38C4E8"
                  width="10.7" height="10.7"/>

            <rect x="4.5" y="10.7" transform="matrix(0.9659 -0.2588 0.2588 0.9659 -3.8265 3.0954)" fill="#2083C6"
                  width="10.7" height="10.7"/>

            <rect x="2.2" y="19.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -15.1816 12.5509)" fill="#0CA796"
                  width="10.7" height="10.7"/>

            <rect x="4.5" y="27.8" transform="matrix(0.2588 -0.9659 0.9659 0.2588 -24.6983 34.0568)" fill="#4BBFAE"
                  width="10.7" height="10.7"/>

            <rect x="10.7" y="34" transform="matrix(-0.2588 -0.9659 0.9659 -0.2588 -17.7764 65.0793)" fill="#5EC2A7"
                  width="10.7" height="10.7"/>

            <rect x="19.3" y="36.3" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 12.5509 88.4847)" fill="#F6CE2D"
                  width="10.7" height="10.7"/>

            <rect x="27.8" y="34" transform="matrix(-0.9659 -0.2588 0.2588 -0.9659 54.9285 85.9511)" fill="#9B61A8"
                  width="10.7" height="10.7"/>

            <rect x="27.8" y="34" transform="matrix(-0.9659 -0.2588 0.2588 -0.9659 54.9285 85.9511)" fill="#FDD463"
                  width="10.7" height="10.7"/>

            <rect x="34" y="27.8" transform="matrix(-0.9659 0.2588 -0.2588 -0.9659 85.9511 54.9285)" fill="#F99E3E"
                  width="10.7" height="10.7"/>

            <rect x="36.3" y="19.3" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 88.4847 12.5509)" fill="#F6873C"
                  width="10.7" height="10.7"/>

            <rect x="34" y="10.7" transform="matrix(-0.2588 0.9659 -0.9659 -0.2588 65.0793 -17.7764)" fill="#F47931"
                  width="10.7" height="10.7"/>
            <polygon fill="#EF383A" points="36.9,3.3 26.6,6.1 29.8,5.2 32.2,7.6 28.1,11.6 29.3,16.4 39.7,13.6 	"/>
          </g>
        </svg>

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

        <select value={this.state.os} onChange={this.changeOs.bind(this)} style={{margin: '10px'}}>
          <option value="osx">OS X</option>
          <option value="win">Windows</option>
        </select>

        <br/>

        <label style={{margin: '10px', fontFamily: 'sans-serif', color: 'white', fontSize: '11px', clear: 'both'}}>
          <input type="checkbox" onChange={this.toggleTheme.bind(this)} defaultChecked={isChecked}/>
          Dark Theme
        </label>

        <div style={{margin: '10px'}}>
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
          <span style={{margin: '10px', fontFamily: 'sans-serif', color: 'white', fontSize: '11px'}}>
            Color
          </span>
          <ColorPicker
            display={this.state.displayColorPicker}
            color={this.state.color}
            onChangeComplete={this.changeColor}
            type="sketch"
          />
        </div>
      </div>
    );
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

  renderWindows() {
    if (this.state.os === 'osx') {
      ReactDOM.render(<Window1OSX theme={this.state.theme}/>, document.getElementById('window1'));
      this.window2 = ReactDOM.render(<Window2OSX theme={this.state.theme}/>, document.getElementById('window2'));
    } else {
      ReactDOM.render(<Window1Win theme={this.state.theme}/>, document.getElementById('window1'));
      this.window2 = ReactDOM.render(<Window2Win theme={this.state.theme} color={this.state.color}/>, document.getElementById('window2'));
    }
  }
}

ReactDOM.render(<Switch/>, document.getElementById('controls'));
