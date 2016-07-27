import React, { Component, PropTypes } from 'react';

const styles = {
  list: {
    margin: '0px',
    padding: '0px',
    listStyle: 'none'
  },
  title: {
    display: 'block',
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '18px',
    lineHeight: '1.4em',
    fontWeight: 'normal',
    margin: '20px 10px 10px',
    padding: '0px 0px 10px',
    borderBottom: '1px solid rgba(255, 255, 255, .2)'
  },
  subtitle: {
    fontSize: '15px',
    borderBottom: 'none',
    padding: '0px',
    margin: '20px 10px 10px',
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
        {this.renderItem(this.props.list)}
      </div>
    );
  }

  renderItem(item, path = '', subtitle = false) {
    let finalChildren = [];
    for (let prop in item) {
      if (item.hasOwnProperty(prop)) {
        if (typeof item[prop] === 'object') {
          let children = this.renderItem(item[prop], path ? path + '/' + prop : prop, true);
          if (children[0] && children[0].type === 'ul') {
            finalChildren.push(
              <ul style={styles.list}  key={prop}>
                <li style={styles.list}>
                  <span style={{ ...styles.title, ...(subtitle ? styles.subtitle : {}) }}>{prop}</span>
                  {children}
                </li>
              </ul>
            );
          } else {
            finalChildren.push(
              <ul style={styles.list}  key={prop}>
                <li style={styles.list}>
                  <span style={{ ...styles.title, ...(subtitle ? styles.subtitle : {}) }}>{prop}</span>
                  <ul style={styles.list}>
                    {children}
                  </ul>
                </li>
              </ul>
            );
          }
        } else {
          const selected = path + '/' + prop === this.state.selected;
          finalChildren.push(
            <li style={styles.list} key={prop}>
              <a
                key={path + '/' + prop}
                style={{ ...styles.item, ...(selected ? styles.itemSelect : {}) }}
                onClick={() => this.click(path, prop)}
              >
                {prop}
              </a>
            </li>
          );
        }
      }
    }
    return finalChildren;
  }
}

export default Examples;
