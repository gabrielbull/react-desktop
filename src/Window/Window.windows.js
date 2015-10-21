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
class Window extends Component {
  static propTypes = {
    chrome: PropTypes.bool
  };

  filterChildren() {
    let titleBar = '';
    let otherChildren = [];
    Children.map(this.props.children, (element) => {
      if (element.type === TitleBar || element.type === TitleBarWindows) {
        titleBar = element;
      } else {
        otherChildren = [...otherChildren, element];
      }
    });

    return [titleBar, ...otherChildren];
  }

  render() {
    let { style, chrome, ...props } = this.props;

    let componentStyle = {...styles.window, ...style};
    if (chrome) {
      componentStyle = {...componentStyle, ...styles.chrome};

      componentStyle = {...componentStyle, borderColor: this.state.color };

      if (!this.state.windowFocused) {
        componentStyle = {...componentStyle, ...styles.unfocused}
      }
    }

    componentStyle = {
      ...componentStyle,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    };

    if (this.state.requestedTheme === 'dark') {
      componentStyle = {...componentStyle, ...styles.windowDark};
    }

    if (this.state.background) {
      componentStyle = {...componentStyle, backgroundColor: this.state.background};
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

export default Window;
