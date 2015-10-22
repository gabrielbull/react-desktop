import React, { Component, PropTypes, Children, cloneElement } from 'react';
import DesktopComponent  from '../DesktopComponent';
import Pane from './Pane/Pane.windows';
import Item from './Item/Item.windows';
import Content from './Content/Content.windows';

const styles = {
  display: 'flex',
  flexWrap: 'wrap'
};

@DesktopComponent
class SplitView extends Component {
  static Pane = Pane;
  static Content = Content;
  static Item = Item;

  static childContextTypes = {
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool
  };

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
        <Pane>
          {children}
        </Pane>
        {content}
      </div>
    );
  }
}

export default SplitView;
