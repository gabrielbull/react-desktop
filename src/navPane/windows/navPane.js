import React, { Component, PropTypes, Children, cloneElement } from 'react';
import Pane from './pane/pane';
import Item from './item/item';
import styles from './style/windows10';

class NavPane extends Component {
  static Item = Item;

  static propTypes = {
    canPaneToggle: PropTypes.bool,
    onPaneToggle: PropTypes.func,
    defaultIsPaneExpanded: PropTypes.bool,
    paneCompactedLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paneExpandedLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
    return content ? cloneElement(content, { ...content.props, paneTheme: this.state.theme }) : null;
  }
}

export default NavPane;
