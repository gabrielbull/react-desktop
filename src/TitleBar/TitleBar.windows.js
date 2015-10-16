import React, { Component, PropTypes } from 'react';
import WindowState from '../WindowState';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import Controls from './Controls.windows/Controls';

var styles = {
  windows_10: {
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'drag',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    height: '31px',

    title: {
      WebkitUserSelect: 'none',
      cursor: 'default',
      paddingLeft: '12px',
      fontFamily: '"Segoe UI", "Arial"',
      fontSize: '12px',
      color: '#000000',
      flex: 1,

      unfocused: {
        color: '#a9a9a9'
      }
    }
  }
};

@WindowState
@Styling
class TitleBarWindows extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    title: PropTypes.string,
    controls: PropTypes.bool,
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onMaximizePress: PropTypes.func,
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
    let { children, controls, title, visible, display, ...props } = this.props;

    let styles = this.styles;
    let titleStyle = this.styles.title;

    if (!this.state.windowFocused) {
      styles = mergeStyles(styles, this.styles.unfocused);
      titleStyle = mergeStyles(titleStyle, this.styles.title.unfocused);
    }

    controls = !controls || <Controls {...this.props}/>;
    title = !title || (
        <div style={titleStyle}>
          {this.props.title}
        </div>
      );

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
      <div
        ref="element"
        {...props}
        style={applyStyle(styles)}
      >
        {title}
        {controls}
        {children}
      </div>
    );
  }
}

export default TitleBarWindows;
