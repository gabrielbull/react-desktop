import React, { Component, PropTypes, Children, cloneElement } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import WindowState from '../WindowState';
import TitleBar from '../TitleBar';
import TitleBarWindows from '../TitleBar/TitleBar.windows';

var styles = {
  windows_10: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',

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
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = {
      windowFocused: true,
      visible: props.visible !== false,
      display: props.display !== false
    };
  }

  get styles() {
    return mergeStyles(styles.windows_10, this.props.style);
  }

  render() {
    let { style, border, chrome, children, visible, display, ...props } = this.props;

    let styles = this.styles;

    if (chrome) {
      styles = mergeStyles(styles, this.styles.chrome);

      if (!this.state.windowFocused) {
        styles = mergeStyles(styles, this.styles.unfocused);
      }
    }

    const titleBar = Children.map(children, function (element, index) {
      if (element.type === TitleBar || element.type === TitleBarWindows) {
        return element;
      }
    }.bind(this));

    children = Children.map(children, function (element, index) {
      if (element.type !== TitleBar && element.type !== TitleBarWindows) {
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

    if (border) {
      styles = mergeStyles(styles, { borderColor: border });
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

export default WindowWindows;
