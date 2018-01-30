import React, { Component } from 'react';
import Tab from './Tab';
import styles from '../style/10.11';

class Tabs extends Component {
  select(item) {
    this.refs[item.props.tabId].setState({ selected: true });
  }

  unselect(item) {
    this.refs[item.props.tabId].setState({ selected: false });
  }

  render() {
    const { style } = this.props;

    let children;
    // todo: use Children.map
    if (!this.props.children) {
      return null;
    } else if (
      Object.prototype.toString.call(this.props.children) !== '[object Array]'
    ) {
      children = [this.props.children];
    } else {
      children = [...this.props.children];
    }

    let tabs = [];
    let hasSelected = false;
    for (let i = 0, len = children.length; i < len; ++i) {
      let props = children[i].props;
      if (props.selected) hasSelected = true;
      if (i === 0) props = { ...props, firstChild: true };
      if (i === len - 1) props = { ...props, lastChild: true };

      if (
        children[i + 1] &&
        children[i + 1].props &&
        children[i + 1].props.selected
      ) {
        props = { ...props, nextSelected: true };
      }

      tabs = [...tabs, props];
    }

    if (!hasSelected && tabs[0]) tabs[0].selected = true;
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
    if (prevSelectedIndex >= 0 && tabs[prevSelectedIndex])
      tabs[prevSelectedIndex] = {
        ...tabs[prevSelectedIndex],
        prevSelected: true
      };

    return (
      <div style={{ ...styles.tabs, ...style }}>{this.renderTabs(tabs)}</div>
    );
  }

  renderTabs(tabs) {
    const children = [];
    for (let i = 0, len = tabs.length; i < len; ++i) {
      children.push(
        <Tab key={i} {...tabs[i]}>
          {tabs[i].title}
        </Tab>
      );
    }
    return children;
  }
}

export default Tabs;
