import React, { Component, PropTypes, Children, cloneElement } from 'react';
import DesktopComponent from '../../desktop-component';
import Pane from './pane/pane';
import Item from './split-view-item';
import Content from './content/content';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class SplitView extends Component {
  static Pane = Pane;
  static Content = Content;
  static Item = Item;

  static propTypes = {
    id: PropTypes.string,
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool,
    push: PropTypes.bool,
    onPaneToggle: PropTypes.func
  };

  static childContextTypes = {
    id: PropTypes.string,
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool,
    push: PropTypes.bool
  };

  constructor(props, context, updater) {
    let { id, ...properties } = props;
    super(properties, context, updater);
    this.id = id || 'splitview';
    this.firstRender = true;
  }

  set currentTitle(value) {
    this._currentTitle = value;
  }

  get currentTitle() {
    return this._currentTitle || '';
  }

  getChildContext() {
    return {
      id: this.id,
      compactLength: this.props.compactLength,
      openLength: this.props.openLength,
      placement: this.props.placement,
      isOpen: this.props.isOpen,
      push: this.props.push
    };
  }

  componentDidUpdate() {
    for (var prop in this.refs) {
      if (this.refs.hasOwnProperty(prop)) {
        this.refs[prop].setState({ parentTheme: this.state.theme });
      }
    }
  }

  getItemStorageKey(key) {
    return `.${this.id}.$/.${key}`;
  }

  render() {
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
    );
  }
}

export default SplitView;
