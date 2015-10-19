import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { mergeStyles, applyStyle } from '../Styling';
import Item from './Item.osx/Item.osx';
import Tabs from './Tabs.osx/Tabs.osx';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
  }
};

class SegmentedControl extends Component {
  static Item = Item;

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  select(item) {
    this.refs.tabs.select(item);
  }

  unselect(item) {
    this.refs.tabs.unselect(item);
  }

  render() {
    let { children, style, visible, display, ...props} = this.props;

    children = Children.map(children, function (child, index) {
      return cloneElement(child, { control: this, tabId: index });
    }.bind(this));

    const tabs = <Tabs ref="tabs" tabs={children}/>;
    const styles = mergeStyles(this.styles, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <div style={applyStyle(styles)} ref="element" {...props}>
        {tabs}
        {children}
      </div>
    );
  }
}

export default SegmentedControl;
