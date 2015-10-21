import React, { Component, PropTypes, Children, cloneElement } from 'react';
import DesktopComponent  from '../../../DesktopComponent';
import Icon from './Icon.windows';
import { transparentize } from '../../../Color';

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff',
    lineHeight: '44px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    letterSpacing: '0.4pt',
    padding: '0 18px',

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, .1)',
    },

    ':active': {
      backgroundColor: 'rgba(255, 255, 255, .2)',
    }
  }
};

@DesktopComponent
class Item extends Component {
  static propTypes = {
    onPress: PropTypes.func
  };

  render() {
    const { children, style, onPress, ...props } = this.props;
    const title = children.props.title;
    const selected = children.props.selected;
    const ItemIcon = children.props.icon;
    let componentStyle = {...styles.item, ...style};

    if (selected) {
      componentStyle = {
        ...componentStyle,
        backgroundColor: transparentize(this.state.color, .4),
        ':hover': {
          ...componentStyle[':hover'],
          backgroundColor: transparentize(this.state.color, .2)
        },
        ':active': {
          ...componentStyle[':active'],
          backgroundColor: transparentize(this.state.color, .1)
        }
      };
    }

    return (
      <a
        onClick={onPress}
        style={componentStyle}
        {...props}
      >
        <Icon icon={ItemIcon}/>
        {title}
      </a>
    );
  }
}

export default Item;
