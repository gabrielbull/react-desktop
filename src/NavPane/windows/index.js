import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Pane from './Pane';
import Item from './Item';
import styles from './style/windows10';
import { ColorContext, colorPropTypes } from '../../style/color/windows';
import {
  ThemeContext,
  themePropTypes,
  themeContextTypes
} from '../../style/theme/windows';

let warnOnce = false;
function applyChildenClasses() {
  return function(ComposedComponent) {
    const nextItem = Item;
    ComposedComponent.prototype.Item = ComposedComponent.Item = function(
      ...args
    ) {
      if (!warnOnce) {
        warnOnce = true;
        console.warn(
          'React Desktop: Using NavPane.Item is deprecated, import NavPaneItem instead.'
        );
      }
      return new nextItem(...args);
    };
    return ComposedComponent;
  };
}

@applyChildenClasses()
@ColorContext()
@ThemeContext()
class NavPane extends Component {
  static propTypes = {
    ...colorPropTypes,
    ...themePropTypes,
    canPaneToggle: PropTypes.bool,
    onPaneToggle: PropTypes.func,
    defaultIsPaneExpanded: PropTypes.bool,
    paneCompactedLength: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    paneExpandedLength: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  static contextTypes = {
    ...themeContextTypes
  };

  render() {
    return (
      <div style={styles.navPane}>
        <Pane
          items={this.props.children}
          canPaneToggle={this.props.canPaneToggle}
          onPaneToggle={this.props.onPaneToggle}
          defaultIsPaneExpanded={this.props.defaultIsPaneExpanded}
          paneCompactedLength={this.props.paneCompactedLength}
          paneExpandedLength={this.props.paneExpandedLength}
        />
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    let content = null;
    Children.map(this.props.children, child => {
      if (child.props.selected) content = child;
    });
    return content
      ? cloneElement(content, {
        ...content.props,
        paneTheme: this.context.theme
      })
      : null;
  }
}

export default NavPane;
