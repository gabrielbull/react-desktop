import React, { Component, PropTypes } from 'react';

const styles = {
  title: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '18px',
    lineHeight: '1.4em',
    fontWeight: 'normal',
    margin: '20px 10px 10px',
    padding: '0 0 10px',
    borderBottom: '1px solid rgba(255, 255, 255, .2)'
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
  },
  itemSelect: {
    color: '#6FFFFD',
    fontWeight: 'bold'
  }
};

class Examples extends Component {
  static contextTypes = {
    playground: PropTypes.object
  };

  static propTypes = {
    defaultExample: PropTypes.string,
    list: PropTypes.object
  };

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      selected: props.defaultExample
    }
  };


  click = (category, key) => {
    key = (category + '/' + key).replace(/^\//, '');
    this.context.playground.showExample(key);
    this.setState({ selected: key });
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
        const selected = category + '/' + prop === this.state.selected;
        children.push(
          <a
            key={category + '/' + prop}
            style={{ ...styles.item, ...(selected ? styles.itemSelect : {}) }}
            onClick={() => this.click(category, prop)}
          >
            {prop}
          </a>
        );
      }
    }
    return children;
  }
}

export default Examples;
