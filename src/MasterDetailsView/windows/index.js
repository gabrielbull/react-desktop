import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Master from './Master';
import Details from './Details';
import Pane from './Pane';
import Item from './Item';
import { ColorContext, colorPropTypes } from '../../style/color/windows';
import {
  ThemeContext,
  themePropTypes,
  themeContextTypes
} from '../../style/theme/windows';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    flex: '1',
    background: 'white',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default'
  },

  containerDark: {
    background: '#171717'
  }
};

let warnOnce = false;
function applyChildenClasses() {
  return function(ComposedComponent) {
    const nextItem = Item;
    const item = function(...args) {
      if (!warnOnce) {
        warnOnce = true;
        console.warn(
          'React Desktop: Using MasterDetailsView.Item is deprecated, import MasterDetailsViewItem instead.'
        );
      }
      return new nextItem(...args);
    };

    item.prototype.Master = item.Master = Master;
    item.prototype.Details = item.Details = Details;
    ComposedComponent.prototype.Item = ComposedComponent.Item = item;
    return ComposedComponent;
  };
}

@applyChildenClasses()
@ColorContext()
@ThemeContext()
class MasterDetailsView extends Component {
  static propTypes = {
    ...colorPropTypes,
    ...themePropTypes
  };

  static childContextTypes = {
    masterDetails: PropTypes.object
  };

  static contextTypes = {
    ...themeContextTypes
  };

  masters = [];
  details = [];

  maxWidth;

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      selected: 0
    };
    this.filterChildren(props.children);
  }

  getChildContext() {
    return {
      masterDetails: this
    };
  }

  select(index) {
    this.setState({ selected: index });
  }

  filterChildren(children) {
    this.maxWidth = null;
    Children.map(children, (item, key) => {
      Children.map(item.props.children, child => {
        const MasterEl = <Master />;
        const DetailsEl = <Details />;
        if (child.type === MasterEl.type) {
          if (
            child.props.width !== undefined &&
            child.props.width > this.maxWidth
          ) {
            this.maxWidth = child.props.width;
          }
          this.masters = [
            ...this.masters,
            cloneElement(child, { key: key, index: key })
          ];
        } else if (child.type === DetailsEl.type) {
          this.details = [
            ...this.details,
            cloneElement(child, { key: key, index: key })
          ];
        }
      });
    });
  }

  render() {
    const { style, ...props } = this.props;
    let componentStyle = { ...styles.container, ...style };

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.containerDark, ...style };
    }

    return (
      <div style={componentStyle} {...props}>
        <Pane width={this.maxWidth}>{this.renderMasters()}</Pane>
        {this.renderDetail()}
      </div>
    );
  }

  renderMasters() {
    let children = [];
    this.masters.forEach((item, index) => {
      children.push(
        index === this.state.selected
          ? cloneElement(item, { selected: true })
          : item
      );
    });
    return children;
  }

  renderDetail() {
    let children = null;
    this.details.forEach((item, index) => {
      if (index === this.state.selected) children = item;
    });
    return children;
  }
}

export default MasterDetailsView;
