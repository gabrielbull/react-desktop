import React, { Component, PropTypes, Children, cloneElement } from 'react';
import DesktopComponent from '../../desktopComponent';
import Pane from './pane/pane';
import Item from './item/item';
import styles from './style/windows10';

@DesktopComponent()
class SplitView extends Component {
  static Item = Item;

  static propTypes = {
    canPaneToggle: PropTypes.bool,
    onPaneToggle: PropTypes.func,
    defaultIsPaneExpanded: PropTypes.bool,
    paneCompactedLength: PropTypes.number,
    paneExpandedLength: PropTypes.number
  };

  /*static childContextTypes = {
    id: PropTypes.string,
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool,
    push: PropTypes.bool
  };*/

  /*constructor(props, context, updater) {
    super();
    //let { id, ...properties } = props;
    //super(properties, context, updater);
    //this.id = id || 'splitview';
    //this.firstRender = true;
  }*/

  /*set currentTitle(value) {
    this._currentTitle = value;
  }

  get currentTitle() {
    return this._currentTitle || '';
  }*/

  /*getChildContext() {
    return {
      id: this.id,
      compactLength: this.props.compactLength,
      openLength: this.props.openLength,
      placement: this.props.placement,
      isOpen: this.props.isOpen,
      push: this.props.push
    };
  }*/

  /*componentDidUpdate() {
    for (var prop in this.refs) {
      if (this.refs.hasOwnProperty(prop)) {
        this.refs[prop].setState({ parentTheme: this.state.theme });
      }
    }
  }

  getItemStorageKey(key) {
    return `.${this.id}.$/.${key}`;
  }*/

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
    /*
    const { children, style, ...props } = this.props;

    let hasSelectedItem = false;
    Children.map(children, function (child) {
      if (child.props.selected) {
        hasSelectedItem = true;
      }
    });

    let content = Children.map(children, (child, key) => {
      let props = { ref: key };
      if (!hasSelectedItem && key === 0 && this.firstRender) {
        this.selectedItem = key;
        props.selected = true;
      } else if (this.selectedItem === key) {
        props.selected = true;
      }
      return cloneElement(child, props);
    });

    this.firstRender = false;

    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        <Pane onPaneToggle={this.props.onPaneToggle}>
          {content}
        </Pane>
        {content}
      </div>
    );*/
  }

  renderContent() {
    let content;
    Children.map(this.props.children, child => {
      if (child.props.selected) content = child;
    });

    return content;
  }
}

export default SplitView;
