import React, { Component, PropTypes, Children } from 'react';
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

  render() {
    let { children, style, visible, display, ...props} = this.props;

    children = Children.map(children, child => child);
    const tabs = <Tabs tabs={children}/>;

    let styles = this.styles;
    if (!this.state.visible) {
      styles = mergeStyles(styles, { visibility: 'hidden' });
    } else {
      styles = mergeStyles(styles, { visibility: 'visible' });
    }

    if (!this.state.display) {
      styles = mergeStyles(styles, { display: 'none' });
    } else {
      styles = mergeStyles(styles, { display: 'block' });
    }

    return (
      <div style={applyStyle(styles)} ref="element" {...props}>
        {tabs}
        {this.props.children}
      </div>
    );
  }
}

export default SegmentedControl;
