import { Component, cloneElement, PropTypes } from 'react';
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
  static propTypes = {
    hasMargin: PropTypes.bool
  };

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate() {
    this.applyColor();
  }

  applyColor() {
    let children = findDOMNode(this).children;
    for (var i = 0, len = children.length; i < len; ++i) {
      children[i].style.fill = this.state.theme === 'dark' ? '#ffffff' : '#000000';
    }
  }

  render() {
    let style = { ...styles.svg };
    if (!this.props.hasMargin) {
      delete style.marginRight;
    }

    return cloneElement(this.props.icon, {
      style: style
    });
  }
}

export default Icon;
