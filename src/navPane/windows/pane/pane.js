import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent from '../../../desktopComponent';
import Item from './item/item';
import Button from './button/button';
import styles from './style/windows10';

@DesktopComponent
class Pane extends Component {
  static Item = Item;

  static propTypes = {
    canPaneToggle: PropTypes.bool,
    onPaneToggle: PropTypes.func,
    defaultIsPaneExpanded: PropTypes.bool,
    paneCompactedLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paneExpandedLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    canPaneToggle: true,
    defaultIsPaneExpanded: true,
    paneCompactedLength: '48px',
    paneExpandedLength: '200px'
  };

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      isPaneExpanded: props.defaultIsPaneExpanded
    };
  }

  /*static contextTypes = {
    id: PropTypes.string,
    compactLength: PropTypes.number,
    openLength: PropTypes.number,
    isOpen: PropTypes.bool
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      isOpen: context.isOpen !== false
    };
  }*/

  /*get splitView() {
    return this.context.parent;
  }

  filterChildren(children) {
    return Children.map(children, (child, key) => {
      const { onClick } = child.props;

      return (
        <Item onClick={onClick} key={key} ref={key} identifierKey={key} isOpen={this.state.isOpen}>
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
  }*/

  toggleOpen = () => {};

  render() {
    const { canPaneToggle, paneCompactedLength, paneExpandedLength } = this.props;

    const button = !canPaneToggle ? null : <Button style={styles.buttonStyle} onClick={this.toggleOpen}/>;

    let componentStyle = { ...styles.pane };

    if (canPaneToggle) {
      if (this.state.isPaneExpanded) componentStyle.width = paneExpandedLength;
      else componentStyle.width = paneCompactedLength;
    } else {
      componentStyle.width = paneExpandedLength;
    }

    return (
      <div
        style={componentStyle}
      >
        <div style={styles.padding}/>
        {button}
      </div>
    );
    /*
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
    );*/
  }
}

export default Pane;
