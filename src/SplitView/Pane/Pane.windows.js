import React, { Component, PropTypes, Children } from 'react';
import { findDOMNode } from 'react-dom';
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
    overflow: 'hidden'
  },

  padding: {
    height: '48px'
  },

  buttonStyle: {
    position: 'absolute',
    padding: '8px 10px',
    top: '7px',
    left: '4px',
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
    isOpen: PropTypes.bool,
    onPaneToggle: PropTypes.func
  };

  static contextTypes = {
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    placement: PropTypes.string,
    isOpen: PropTypes.bool
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      isOpen: context.isOpen !== false
    };
  }

  componentDidMount() {
    const reactId = findDOMNode(this).getAttribute('data-reactid');
    const key = `${reactId}-SplitViewPane-isOpen`;
    if (this.context.storage && typeof this.context.storage[key] !== 'undefined') {
      const value = this.context.storage[key] === 'true';
      if (value != this.state.isOpen) {
        this.toggleOpen();
      }
    }
  }

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

  toggleOpen = () => {
    this.setState({isOpen: !this.state.isOpen});
    if (this.context.storage) {
      const reactId = findDOMNode(this).getAttribute('data-reactid');
      this.context.storage[`${reactId}-SplitViewPane-isOpen`] = !this.state.isOpen;
    }
    if (this.props.onPaneToggle) {
      this.props.onPaneToggle(!this.state.isOpen);
    }
  };

  render() {
    let { children, style, ...props } = this.props;
    children = this.filterChildren(children);

    let componentStyle = {...styles.pane, ...style};
    if (this.context.openLength) {
      componentStyle.width = this.context.openLength + 'px';
    }

    if (!this.state.isOpen) {
      componentStyle.width = this.context.compactLength ? this.context.compactLength : '48px';
    }

    return (
      <div
        style={componentStyle}
        {...props}
      >
        <div style={styles.padding}/>
        <Button style={styles.buttonStyle} onClick={this.toggleOpen}/>
        {children}
      </div>
    );
  }
}

export default Pane;
