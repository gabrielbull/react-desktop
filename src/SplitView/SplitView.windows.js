import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../DesktopComponent';
import Pane from './Pane/Pane.windows';
import Item from './Item/Item.windows';
import Content from './Content/Content.windows';

const styles = {
  display: 'flex'
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

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        style={{...styles, ...style}}
        {...props}
      >
        <Pane>
          {children}
        </Pane>
        {children}
      </div>
    );
  }
}

export default SplitView;
