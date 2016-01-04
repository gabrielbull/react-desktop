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
    onPaneToggle: PropTypes.func
  };

  static contextTypes = {
    id: PropTypes.string,
    storage: PropTypes.object,
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    isOpen: PropTypes.bool,
    persistIsOpen: PropTypes.bool
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      isOpen: context.isOpen !== false
    };
  }

  get splitView() {
    return this.context.parent;
  }

  get storageKey() {
    return `.${this.context.id}.$/.isOpen`;
  }

  componentDidMount() {
    if (this.context.storage && typeof this.context.storage[this.storageKey] !== 'undefined' && this.context.persistIsOpen) {
      const value = this.context.storage[this.storageKey] === 'true';
      if (value != this.state.isOpen) {
        this.toggleOpen();
      }
    }
  }

  filterChildren(children) {
    return Children.map(children, (child, key) => {
      const { onPress } = child.props;

      return (
        <Item onPress={onPress} key={key} ref={key} identifierKey={key} isOpen={this.state.isOpen}>
          {child}
        </Item>
      );
    });
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
    if (this.refs) {
      for (var prop in this.refs) {
        if (this.refs.hasOwnProperty(prop)) {
          this.refs[prop].setState({ isOpen: !this.state.isOpen });
        }
      }
    }
    if (this.context.storage && this.context.persistIsOpen) {
      this.context.storage[this.storageKey] = !this.state.isOpen;
    }
    if (this.props.onPaneToggle) {
      this.props.onPaneToggle(!this.state.isOpen);
    }
  };

  selectItem(item) {
    for (var prop in this.refs) {
      if (this.refs.hasOwnProperty(prop)) {
        if (this.refs[prop].props.identifierKey === item.props.identifierKey) {
          this.refs[prop].setState({ selected: true });
        } else {
          this.refs[prop].setState({ selected: false });
        }
      }
    }
  }

  render() {
    let { children, style, ...props } = this.props;
    children = this.filterChildren(children);

    let componentStyle = { ...styles.pane, ...style };
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
