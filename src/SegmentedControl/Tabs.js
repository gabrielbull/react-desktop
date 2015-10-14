import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import Tab from './Tab';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    position: 'absolute',
    top: '-10px',
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

  get styles() {
    return styles.osx_10_11;
  }

  render() {
    let tabs = [];
    for (let i = 0, len = this.props.tabs.length; i < len; ++i) {
      let props = this.props.tabs[i].props;
      if (i === 0) {
        props = Object.assign({}, props, { firstChild: true });
      } else if (i === (len - 1)) {
        props = Object.assign({}, props, { lastChild: true });
      }

      if (this.props.tabs[i + 1] && this.props.tabs[i + 1].props.selected) {
        props = Object.assign({}, props, { nextSelected: true });
      }

      tabs = [...tabs, <Tab key={i} {...props}/>];
    }

    return (
      <div style={this.styles}>
        {tabs}
      </div>
    );
  }
}

export default Tabs;
