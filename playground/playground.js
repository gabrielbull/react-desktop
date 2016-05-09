import React, { Component, PropTypes } from 'react';
import examples from 'examples';
import Sidebar from './ui/sidebar/sidebar';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  sidebar: {
    width: '200px'
  },
  example: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '800px',
    height: '100%',
    margin: '0 auto'
  }
};

class Playground extends Component {
  static childContextTypes = {
    playground: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      color: '#cc7f29',
      theme: 'light',
      example: null
    };
    this.loadState(false);
  }

  loadState(mounted = true) {
    try {
      const state = JSON.parse(localStorage['playground']);
      if (mounted) this.setState(state);
      else this.state = { ...this.state, ...state };
    } catch (err) {}
  }

  persistState() {
    localStorage['playground'] = JSON.stringify(this.state);
  }

  getChildContext() {
    return {
      playground: this
    };
  }

  componentDidUpdate() {
    this.persistState();
  }

  showExample = (example) => {
    this.setState({ example: example });
  };

  changeColor = (color) => {
    this.setState({ color: color });
    this.persistState();
  };

  changeTheme = (theme) => {
    this.setState({ theme: theme });
    this.persistState();
  };

  render() {
    let example;
    if (this.state.example) {
      const Example = examples['/examples/' + this.state.example];
      if (Example) {
        example = <Example color={this.state.color} theme={this.state.theme}/>;
      }
    }

    return (
      <div style={styles.container}>
        <Sidebar
          onColorChange={this.changeColor}
          color={this.state.color}
          theme={this.state.theme}
          onThemeChange={this.changeTheme}
          style={styles.sidebar}
          defaultExample={this.state.example}
        />
        <div style={styles.example}>
          {example}
        </div>
      </div>
    );
  }
}

export default Playground;
