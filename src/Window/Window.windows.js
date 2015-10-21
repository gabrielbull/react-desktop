import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent, { WindowState }  from '../DesktopComponent';
import TitleBar from '../TitleBar';
import TitleBarWindows from '../TitleBar/TitleBar.windows';

var styles = {
  window: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },

  windowDark: {
    backgroundColor: '#171717'
  },

  chrome: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#1883d7',
    boxShadow: '0 2px 11px 3px rgba(0, 0, 0, .2)'
  },

  unfocused: {
    borderColor: '#aaaaaa'
  },

  content: {
    margin: '24px 20px 20px 20px'
  }
};

@DesktopComponent(WindowState)
class WindowWindows extends Component {
  static propTypes = {
    chrome: PropTypes.bool,
    border: PropTypes.string
  };

  filterChildren() {
    let titleBar = '';
    let otherChildren = [];
    Children.map(this.props.children, function (element) {
      if (element.type === TitleBar || element.type === TitleBarWindows) {
        titleBar = element;
      } else {
        otherChildren = [...otherChildren, element];
      }
    }.bind(this));

    return [titleBar, ...otherChildren];
  }

  render() {
    let { style, border, chrome, ...props } = this.props;

    let componentStyle = {...styles.window, ...style};
    if (chrome) {
      componentStyle = {...componentStyle, ...styles.chrome};

      if (!this.state.windowFocused) {
        componentStyle = {...componentStyle, ...styles.unfocused}
      }
    }

    componentStyle = {
      ...componentStyle,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    };

    if (border) {
      componentStyle = {...componentStyle, borderColor: border };
    }

    if (this.state.requestedTheme === 'dark') {
      componentStyle = {...componentStyle, ...styles.windowDark};
    }

    const [titleBar, ...children] = this.filterChildren();
    return (
      <div
        style={componentStyle}
        {...props}
      >
        {titleBar}
        <div style={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

export default WindowWindows;
