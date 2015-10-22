import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent  from '../../DesktopComponent';
import Item from './Item/Item.windows';
import Button from './Button/Button.windows';

const styles = {
  pane: {
    display: 'flex',
    position: 'relative',
    flexGrow: '0',
    flexShrink: '0',
    flexDirection: 'column',
    width: '200px',
    marginTop: '48px'
  },

  buttonStyle: {
    position: 'absolute',
    padding: '8px 10px',
    top: '-41px',
    left: '5px',
    width: '20px',
    height: '20px'
  }
};

@DesktopComponent
class Pane extends Component {
  static Item = Item;

  static propTypes = {
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool
  };

  static contextTypes = {
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool
  };

  filterChildren(children) {
    return Children.map(children, function (child) {
      const { onPress } = child.props;

      return (
        <Item onPress={onPress}>
          {child}
        </Item>
      );
    });
  }

  render() {
    let { children, style, ...props } = this.props;
    children = this.filterChildren(children);

    return (
      <div
        style={{...styles.pane, ...style}}
        {...props}
      >
        <Button style={styles.buttonStyle}/>
        {children}
      </div>
    );
  }
}

export default Pane;
