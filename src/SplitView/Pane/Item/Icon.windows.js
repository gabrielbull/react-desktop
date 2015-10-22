import { Component, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import DesktopComponent  from '../../../DesktopComponent';

const styles = {
  svg: {
    width: '16px',
    height: '16px',
    marginRight: '32px'
  }
};

@DesktopComponent
class Icon extends Component {
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate() {
    this.applyColor();
  }

  applyColor() {
    let children = findDOMNode(this).children;
    for (var i = 0, len = children.length; i < len; ++i) {
      children[i].style.fill = this.state.requestedTheme === 'dark' ? '#ffffff' : '#000000';
    }
  }

  render() {
    return cloneElement(this.props.icon, {
      style: {
        ...styles.svg
      }
    });
  }
}

export default Icon;
