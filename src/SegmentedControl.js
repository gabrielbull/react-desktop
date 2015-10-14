import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from './Styling';
import ItemClass from './SegmentedControl/Item';
import Tabs from './SegmentedControl/Tabs';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
  }
};

class SegmentedControl extends Component {
  static Item = ItemClass;

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object
  };

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let children = this.props.children.$$typeof ? [this.props.children] : this.props.children;
    const tabs = <Tabs tabs={children}/>;

    return (
      <div style={applyStyle(this.styles)} ref="element">
        {tabs}
        {this.props.children}
      </div>
    );
  }
}

export default SegmentedControl;
