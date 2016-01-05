import React, { Component, PropTypes } from 'react';

const styles = {
  title: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    lineHeight: '1.2em',
    fontWeight: 'bold',
    margin: 0,
    padding: '10px'
  },
  item: {
    display: 'block',
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '12px',
    lineHeight: '1.2em',
    fontWeight: 'normal',
    margin: 0,
    padding: '2px 10px',
    cursor: 'pointer'
  }
};

class Examples extends Component {
  static contextTypes = {
    playground: PropTypes.object
  };

  static propTypes = {
    list: PropTypes.object
  };

  click = (key) => {
    key = (this.props.path + '/' + key).replace(/^\//, '');
    this.context.playground.showExample(key);
  };

  render() {
    let name = this.props.name ? <h1 style={styles.title}>{this.props.name}</h1> : null;

    return (
      <div>
        {name}
        {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    let children = [];
    for (let prop in this.props.list) {
      if (this.props.list.hasOwnProperty(prop)) {
        let item = this.props.list[prop];
        if (typeof item === 'function') {
          children.push(this.renderItem(item, prop));
        } else {
          children.push(<Examples key={prop} name={prop} list={item} path={(this.props.path || '') + '/' + prop}/>);
        }
      }
    }
    return children;
  }

  renderItem(item, key) {
    return <a key={key} style={styles.item} onClick={() => this.click(key)}>{key}</a>
  }
}

export default Examples;
