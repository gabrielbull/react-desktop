import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { mergeStyles } from '../Styling';
import Item from './Item.osx/Item.osx';
import Tabs from './Tabs.osx/Tabs.osx';

var styles = {
  segmentedControl: {
    WebkitUserSelect: 'none',
    cursor: 'default'
  }
};

class SegmentedControl extends Component {
  static Item = Item;

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  select(item) {
    this.refs.tabs.select(item);
  }

  unselect(item) {
    this.refs.tabs.unselect(item);
  }

  render() {
    let { children, style, visible, display, ...props } = this.props;

    children = Children.map(children, (child, index) => {
      return cloneElement(child, { control: this, tabId: index });
    });

    const tabs = <Tabs ref="tabs" tabs={children}/>;

    style = mergeStyles(styles.segmentedControl, style, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <div
        ref="element"
        style={style}
        {...props}
      >
        {tabs}
        {children}
      </div>
    );
  }
}

export default SegmentedControl;
