import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../desktopComponent';
import Item from './item/item';
import Tabs from './tabs/tabs';
import styles from './style/style10_11';
import Box from '../../box/osx/box';

@DesktopComponent
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
    for (let i = 0, len = this.props.children.length; i < len; ++i) {
      if (this.props.children[i].props.selected) child = this.props.children[i];
    }
    return child;
  }
}

export default SegmentedControl;
