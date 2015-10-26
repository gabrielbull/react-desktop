import React, { Component, PropTypes, Children, cloneElement } from 'react';
import DesktopComponent  from '../DesktopComponent';
import Pane from './Pane/Pane.windows';
import Item from './Item/Item.windows';
import Content from './Content/Content.windows';

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
    onPaneToggle: PropTypes.func
  };

  static childContextTypes = {
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool,
    push: PropTypes.bool
  };

  set currentTitle(value) {
    this._currentTitle = value;
  }

  get currentTitle() {
    return this._currentTitle;
  }

  getChildContext() {
    return {
      compactLength: this.props.compactLength,
      openLength: this.props.openLength,
      placement: this.props.placement,
      isOpen: this.props.isOpen,
      push: this.props.push
    };
  }

  componentDidUpdate() {
    for(var prop in this.refs) {
      if (this.refs.hasOwnProperty(prop)) {
        this.refs[prop].setState({parentRequestedTheme: this.state.requestedTheme});
      }
    }
  }

  render() {
    const { children, style, ...props } = this.props;

    let content = Children.map(children, function (child, key) {
      return cloneElement(child, {ref: key});
    });

    return (
      <div
        style={{...styles, ...style}}
        {...props}
      >
        <Pane onPaneToggle={this.props.onPaneToggle}>
          {children}
        </Pane>
        {content}
      </div>
    );
  }
}

export default SplitView;
