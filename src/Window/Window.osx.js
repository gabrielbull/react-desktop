import React, { Component, PropTypes, Children } from 'react';
import { mergeStyles } from '../Styling';
import TitleBar from '../TitleBar';
import TitleBarOSX from '../TitleBar/TitleBar.osx';

var styles = {
  window: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ececec',
    display: 'flex',
    flexDirection: 'column',
  },

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
};

class WindowOSX extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
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
    if (this.props.style) {
      return mergeStyles(styles.window, this.props.style);
    }
    return mergeStyles(styles.window, this.props);
  }

  render() {
    let { style, chrome, children, visible, display, ...props } = this.props;

    let componentStyle = this.styles;
    if (chrome) {
      componentStyle = mergeStyles(componentStyle, styles.chrome);
    }

    const titleBar = Children.map(children, (element) => {
      if (element.type === TitleBar || element.type === TitleBarOSX) {
        return element;
      }
    });

    children = Children.map(children, (element) => {
      if (element.type !== TitleBar && element.type !== TitleBarOSX) {
        return element;
      }
    });

    componentStyle = mergeStyles(componentStyle, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    });

    return (
      <div style={componentStyle} {...props}>
        {titleBar}
        <div style={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

export default WindowOSX;
