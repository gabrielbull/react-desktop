import React, { Component } from 'react';
import Tab from './tab';
import styles from '../style/style10_11';

class Tabs extends Component {
  select(item) {
    this.refs[item.props.tabId].setState({ selected: true });
  }

  unselect(item) {
    this.refs[item.props.tabId].setState({ selected: false });
  }

  render() {
    const { style } = this.props;

    let tabs = [];
    let hasSelected = false;
    for (let i = 0, len = this.props.children.length; i < len; ++i) {
      let props = this.props.children[i].props;
      if (props.selected) hasSelected = true;
      if (i === 0) props = { ...props, firstChild: true };
      if (i === (len - 1)) props = { ...props, lastChild: true };

      if (this.props.children[i + 1] && this.props.children[i + 1].props && this.props.children[i + 1].props.selected) {
        props = { ...props, nextSelected: true };
      }

      tabs = [...tabs, props];
    }

    if (!hasSelected) tabs[0].selected = true;
    let prevSelectedIndex = null;
    let afterSelected = false;
    for (let i = 0, len = tabs.length; i < len; ++i) {
      if (afterSelected) {
        tabs[i] = { ...tabs[i], afterSelected: true };
        afterSelected = false;
      }
      if (tabs[i].selected) {
        afterSelected = true;
        prevSelectedIndex = i - 1;
      }
    }
    if (prevSelectedIndex >= 0) tabs[prevSelectedIndex] = { ...tabs[prevSelectedIndex], prevSelected: true };

    return (
      <div style={{ ...styles.tabs, ...style }}>
        {this.renderTabs(tabs)}
      </div>
    );
  }

  renderTabs(tabs) {
    const children = [];
    for (let i = 0, len = tabs.length; i < len; ++i) {
      children.push(
        <Tab key={i} onClick={() => {}} {...tabs[i]}>{tabs[i].title}</Tab>
      );
    }
    return children;
  }
}

export default Tabs;
