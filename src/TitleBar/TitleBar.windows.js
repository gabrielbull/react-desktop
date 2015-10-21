import React, { Component, PropTypes } from 'react';
import WindowState from '../WindowState';
import { mergeStyles } from '../Styling';
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

@WindowState
class TitleBarWindows extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    title: PropTypes.string,
    controls: PropTypes.bool,
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onMaximizePress: PropTypes.func,
    background: PropTypes.string,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  static childContextTypes = {
    theme: PropTypes.string,
    background: PropTypes.string
  };

  static contextTypes = {
    theme: PropTypes.string
  };

  constructor(props) {
    super();
    this.state = {
      windowFocused: true,
      visible: props.visible !== false,
      display: props.display !== false
    };
  }

  getChildContext() {
    return {
      theme: this.context.theme,
      background: this.props.background
    };
  }

  get styles() {
    return mergeStyles(styles.titleBar, this.props.style);
  }

  render() {
    let { children, style, background, controls, title, visible, display, ...props } = this.props;

    let componentStyle = this.styles;
    let titleStyle = styles.title;

    if (!this.state.windowFocused && this.context.theme !== 'dark') {
      titleStyle = mergeStyles(titleStyle, styles.unfocusedTitle);
    }

    if (this.context.theme === 'dark') {
      titleStyle = mergeStyles(titleStyle, styles.titleDark);
    }

    controls = !controls || <Controls {...this.props}/>;
    title = !title || (
        <div style={titleStyle}>
          {this.props.title}
        </div>
      );

    componentStyle = mergeStyles(componentStyle, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    });

    if (this.context.theme === 'dark') {
      componentStyle = mergeStyles(componentStyle, styles.titleBarDark);
    }

    if (background) {
      componentStyle = mergeStyles(componentStyle, {background: background});
    }

    return (
      <div
        ref="element"
        style={componentStyle}
        {...props}
      >
        {title}
        {controls}
        {children}
      </div>
    );
  }
}

export default TitleBarWindows;
