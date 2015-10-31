import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../DesktopComponent';
import Item from './Item/Item.windows';
import Content from './Content/Content.windows';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class ListView extends Component {
  static Item = Item;
  static Content = Content;

  static propTypes = {
    id: PropTypes.string
  };

  static childContextTypes = {
    id: PropTypes.string
  };

  constructor(props, context, updater) {
    let { id, ...properties } = props;
    super(properties, context, updater);
    this.id = id || 'listview';
  }

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        style={{...styles, ...style}}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default ListView;
