import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent, { WindowState }  from '../DesktopComponent';
import TitleBar from '../TitleBar/TitleBar.windows';
import Grid from '../Grid/Grid.windows';
import SplitView from '../SplitView/SplitView.windows';

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
    let hasGrid = false;
    Children.map(this.props.children, (element) => {
      if (element.type === Grid || element.type === SplitView) {
        hasGrid = true;
      }

      if (element.type === TitleBar) {
        titleBar = element;
      } else {
        otherChildren = [...otherChildren, element];
      }
    });

    return [titleBar, hasGrid, ...otherChildren];
  }

  render() {
    let { style, chrome, ...props } = this.props;

    let componentStyle = {...styles.window, ...style};
    if (chrome) {
      componentStyle = {
        ...componentStyle,
        ...styles.chrome,
        borderColor: this.state.color
      };

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

    const [titleBar, hasGrid, ...children] = this.filterChildren();

    let content;
    if (hasGrid) {
      content = children;
    } else {
      content = <Grid>{children}</Grid>;
    }

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {titleBar}
        {content}
      </div>
    );
  }
}

export default Window;
