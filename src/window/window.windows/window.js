import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent, { WindowFocus, Dimension, Alignment, Padding, Hidden } from '../../desktop-component';
import TitleBar from '../../title-bar/title-bar.windows/title-bar';
import View from '../../view/view.windows/view';

var styles = {
  window: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    padding: '0'
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
    flexGrow: '1',
    display: 'flex'
  }
};

@DesktopComponent(WindowFocus, Dimension('100vw', '100vh'), Alignment, Padding, Hidden)
class Window extends Component {
  static propTypes = {
    chrome: PropTypes.bool,
    storage: PropTypes.object
  };

  padding;

  constructor(props, context, updater) {
    super(props, context, updater);
    if (props.padding) {
      this.padding = props.padding;
    }
  }

  filterChildren() {
    let titleBar = '';
    let otherChildren = [];
    Children.map(this.props.children, (element) => {
      if (element.type === TitleBar) {
        titleBar = element;
      } else {
        otherChildren = [...otherChildren, element];
      }
    });

    return [titleBar, ...otherChildren];
  }

  render() {
    let { style, chrome, ...props } = this.props;

    let componentStyle = { ...styles.window, ...style };
    if (chrome) {
      componentStyle = {
        ...componentStyle,
        ...styles.chrome,
        borderColor: this.state.color
      };

      if (!this.state.windowFocused) {
        componentStyle = { ...componentStyle, ...styles.unfocused }
      }
    }

    if (this.state.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.windowDark };
    }

    if (this.state.background) {
      componentStyle = { ...componentStyle, backgroundColor: this.state.background };
    }

    let contentStyle = { ...styles.content };
    if (this.padding) {
      contentStyle['padding'] = this.padding;
    }

    const [titleBar, ...children] = this.filterChildren();

    let content = <View style={contentStyle}>{children}</View>;

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
