import React, { Component, PropTypes } from 'react';
//import WindowState from '../WindowState';
import { mergeStyles } from '../Styling';
import DesktopComponent, { WindowState }  from '../DesktopComponent';
import Controls from './Controls.windows/Controls';

var styles = {
  titleBar: {
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'drag',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    height: '31px',
    backgroundColor: '#ffffff'
  },

  titleBarDark: {
    backgroundColor: '#171717'
  },

  title: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    paddingLeft: '12px',
    fontFamily: '"Segoe UI", "Arial"',
    fontSize: '12px',
    color: '#000000',
    flex: 1
  },

  titleDark: {
    color: '#ffffff'
  },

  unfocusedTitle: {
    color: '#a9a9a9'
  }
};

@DesktopComponent(WindowState)
class TitleBarWindows extends Component {
  static propTypes = {
    title: PropTypes.string,
    controls: PropTypes.bool,
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onMaximizePress: PropTypes.func,
    background: PropTypes.string
  };

  render() {
    const { children, style, background, controls, title, ...props } = this.props;

    let componentStyle = {...styles.titleBar, ...style};
    let titleStyle = styles.title;

    if (!this.state.windowFocused && this.context.theme !== 'dark') {
      titleStyle = {...titleStyle, ...styles.unfocusedTitle};
    }

    if (this.context.theme === 'dark') {
      titleStyle = {...titleStyle, ...styles.titleDark};
    }

    componentStyle = {
      ...componentStyle,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    };

    if (this.context.requestedTheme === 'dark') {
      componentStyle = {...componentStyle, ...styles.titleBarDark};
    }

    if (background) {
      componentStyle = {...componentStyle, background: background};
    }

    const controlsComponent = !controls || <Controls {...this.props}/>;
    const titleComponent = !title ||
      <div style={titleStyle}>
        {this.props.title}
      </div>;

    return (
      <div
        ref="element"
        style={componentStyle}
        {...props}
      >
        {titleComponent}
        {controlsComponent}
        {children}
      </div>
    );
  }
}

export default TitleBarWindows;
