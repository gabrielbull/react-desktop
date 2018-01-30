import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Margin, { marginPropTypes } from '../../style/margin';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Item from './Item';
import Tabs from './Tabs';
import styles from './style/10.11';
import Box from '../../Box/macOs';

let warnOnce = false;
function applyItem() {
  return function(ComposedComponent) {
    const nextItem = Item;
    ComposedComponent.prototype.Item = ComposedComponent.Item = function(
      ...args
    ) {
      if (!warnOnce) {
        warnOnce = true;
        console.warn(
          'React Desktop: Using SegmentedControl.Item is deprecated, import SegmentedControlItem instead.'
        );
      }
      return new nextItem(...args);
    };
    return ComposedComponent;
  };
}

@applyItem()
@Dimension()
@Margin()
@Hidden()
class SegmentedControl extends Component {
  static propTypes = {
    ...dimensionPropTypes,
    ...marginPropTypes,
    ...hiddenPropTypes,
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
        <Box style={{ marginTop: '-11px', zIndex: 0 }}>{this.renderItem()}</Box>
      );
    } else {
      content = <div>{this.renderItem()}</div>;
    }

    return (
      <div style={styles.sergmentedControl} {...props}>
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
    } else if (
      Object.prototype.toString.call(this.props.children) !== '[object Array]'
    ) {
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
