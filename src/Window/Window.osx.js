import React, { Component, PropTypes, Children, cloneElement } from 'react';
import Styling, { mergeStyles, applyStyle } from './Styling';
import TitleBar from '../TitleBar';
import TitleBarOSX from '../TitleBar/TitleBar.osx';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ececec',
    display: 'flex',
    flexDirection: 'column',

    chrome: {
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      boxShadow:
        '0 0 1px rgba(0, 0, 0, .5), ' + // Border
        '0 15px 25px rgba(0, 0, 0, .1), ' +
        '0 0 30px rgba(0, 0, 0, .06), ' +
        '0 0 60px rgba(0, 0, 0, .06)'
    },

    content: {
      margin: '24px 20px 20px 20px'
    }
  }
};

class WindowOSX extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    chrome: PropTypes.bool,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { style, chrome, children, visible, display, ...props } = this.props;

    let styles = this.styles;
    if (chrome) {
      styles = mergeStyles(styles, this.styles.chrome);
    }

    const titleBar = Children.map(children, function (element, index) {
      if (element.type === TitleBar || element.type === TitleBarOSX) {
        return element;
      }
    }.bind(this));

    children = Children.map(children, function (element, index) {
      if (element.type !== TitleBar && element.type !== TitleBarOSX) {
        return element;
      }
    }.bind(this));

    if (!this.state.visible) {
      styles = mergeStyles(styles, { visibility: 'hidden' });
    } else {
      styles = mergeStyles(styles, { visibility: 'visible' });
    }

    if (!this.state.display) {
      styles = mergeStyles(styles, { display: 'none' });
    } else {
      styles = mergeStyles(styles, { display: 'flex' });
    }

    return (
      <div style={applyStyle(styles)} {...props}>
        {titleBar}
        <div style={applyStyle(this.styles.content)}>
          {children}
        </div>
      </div>
    );
  }
}

export default WindowOSX;
