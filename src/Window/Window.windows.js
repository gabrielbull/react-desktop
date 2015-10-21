import React, { Component, PropTypes, Children } from 'react';
import { mergeStyles } from '../Styling';
import WindowState from '../WindowState';
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

@WindowState
class WindowWindows extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    chrome: PropTypes.bool,
    border: PropTypes.string,
    visible: PropTypes.bool,
    display: PropTypes.bool,
    darkTheme: PropTypes.bool
  };

  static childContextTypes = {
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
      theme: this.props.darkTheme ? 'dark' : 'light'
    };
  }

  render() {
    let { style, darkTheme, border, chrome, children, visible, display, ...props } = this.props;

    let componentStyle = mergeStyles(styles.window, style);
    if (chrome) {
      componentStyle = mergeStyles(componentStyle, styles.chrome);

      if (!this.state.windowFocused) {
        componentStyle = mergeStyles(componentStyle, styles.unfocused);
      }
    }

    const titleBar = Children.map(children, function (element) {
      if (element.type === TitleBar || element.type === TitleBarWindows) {
        return element;
      }
    }.bind(this));

    children = Children.map(children, function (element) {
      if (element.type !== TitleBar && element.type !== TitleBarWindows) {
        return element;
      }
    }.bind(this));

    componentStyle = mergeStyles(componentStyle, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    });

    if (border) {
      componentStyle = mergeStyles(componentStyle, { borderColor: border });
    }

    if (darkTheme) {
      componentStyle = mergeStyles(componentStyle, styles.windowDark);
    }

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
