import React, { Component, PropTypes } from 'react';
import Tab from './Tab.osx';

var styles = {
  tabs: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    position: 'absolute',
    top: '-11px',
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
};

class Tabs extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired
  };

  select(item) {
    this.refs[item.props.tabId].setState({ selected: true });
  }

  unselect(item) {
    this.refs[item.props.tabId].setState({ selected: false });
  }

  render() {
    let tabs = [];
    for (let i = 0, len = this.props.tabs.length; i < len; ++i) {
      let props = this.props.tabs[i].props;
      if (i === 0) {
        props = Object.assign({}, props, { firstChild: true });
      }

      if (i === (len - 1)) {
        props = Object.assign({}, props, { lastChild: true });
      }

      if (this.props.tabs[i + 1] && this.props.tabs[i + 1].props && this.props.tabs[i + 1].props.selected) {
        props = Object.assign({}, props, { nextSelected: true });
      }

      tabs = [...tabs, <Tab ref={props.tabId} item={this.props.tabs[i]} key={i} {...props}/>];
    }

    return (
      <div style={styles.tabs}>
        {tabs}
      </div>
    );
  }
}

export default Tabs;
