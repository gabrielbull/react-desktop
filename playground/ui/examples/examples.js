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

  click = (category, key) => {
    key = (category + '/' + key).replace(/^\//, '');
    this.context.playground.showExample(key);
  };

  render() {
    return (
      <div>
        {this.renderCategories(this.props.list)}
      </div>
    );
  }

  renderCategories(categories) {
    let children = [];
    for (let prop in categories) {
      if (categories.hasOwnProperty(prop)) {
        children.push(<h1 key={prop} style={styles.title}>{prop}</h1>);
        children.push(...this.renderItems(prop, categories[prop]));
      }
    }
    return children;
  }

  renderItems(category, items) {
    let children = [];
    for (let prop in items) {
      if (items.hasOwnProperty(prop)) {
        children.push(<a key={category + '/' + prop} style={styles.item} onClick={() => this.click(category, prop)}>{prop}</a>);
      }
    }
    return children;
  }
}

export default Examples;
