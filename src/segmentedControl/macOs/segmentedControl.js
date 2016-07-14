import React, { Component, PropTypes } from 'react';
import DesktopComponent, {
  Dimension,
  Margin,
  Hidden
} from '../../desktopComponent';
import Item from './item/item';
import Tabs from './tabs/tabs';
import styles from './style/10.11';
import Box from '../../box/osx/box';

@DesktopComponent(Dimension, Margin, Hidden)
class SegmentedControl extends Component {
  static Item = Item;

  static propTypes = {
    box: PropTypes.bool
  };

  select(item) {
    this.refs.tabs.select(item);
  }

  unselect(item) {
    this.refs.tabs.unselect(item);
  }

  render() {
    let { children, box, ...props } = this.props;

    let content;
    if (box) {
      content = (
        <Box style={{ marginTop: '-11px', zIndex: 0 }}>
          {this.renderItem()}
        </Box>
      );
    } else {
      content = (
        <div>
          {this.renderItem()}
        </div>
      );
    }

    return (
      <div
        style={styles.sergmentedControl}
        {...props}
      >
        <Tabs style={{ position: 'relative', zIndex: 1 }}>{children}</Tabs>
        {content}
      </div>
    );
  }

  renderItem() {
    let child = null;
    let children;
    // todo: use Children.map
    if (!this.props.children) {
      return null;
    } else if (Object.prototype.toString.call(this.props.children) !== '[object Array]') {
      children = [this.props.children];
    } else {
      children = [...this.props.children];
    }
    for (let i = 0, len = children.length; i < len; ++i) {
      if (children[i].props.selected) child = children[i];
    }
    return child;
  }
}

export default SegmentedControl;
