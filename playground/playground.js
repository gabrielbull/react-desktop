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
    width: '1000px',
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
      example: null
    };
    this.loadState(false);
  }

  loadState(mounted = true) {
    try {
      const state = JSON.parse(localStorage['playground']);
      if (mounted) this.setState(state);
      else this.state = state;
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

  render() {
    let example;
    if (this.state.example) {
      const Example = examples['/examples/' + this.state.example];
      example = <Example/>;
    }

    return (
      <div style={styles.container}>
        <Sidebar style={styles.sidebar}/>
        <div style={styles.example}>
          {example}
        </div>
      </div>
    );
  }
}

export default Playground;
