import React, { Component, PropTypes } from 'react';
import Controls from './controls/controls';
import styles from './styles/osx.10.11';
import DesktopComponent, { WindowFocus } from '../../desktop-component';

@DesktopComponent(WindowFocus)
class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    controls: PropTypes.bool,
    isFullscreen: PropTypes.bool,
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onMaximizePress: PropTypes.func,
    onResizePress: PropTypes.func
  };

  render() {
    let { children, controls, title, ...props } = this.props;

    let componentStyle = { ...styles.titleBar };
    if (children) {
      componentStyle = { ...componentStyle, ...styles.toolbar };
    }

    let titleStyle = styles.title;
    if (this.props.controls) {
      titleStyle = Object.assign(titleStyle, { paddingRight: '60px' });
    }

    if (!this.state.windowFocused) {
      componentStyle = { ...componentStyle, ...styles.unfocusedTitleBar };
      titleStyle = { ...titleStyle, ...styles.unfocusedTitle }
    }

    controls = !controls || <Controls {...this.props}/>;
    title = !title || (
        <div style={titleStyle}>
          {this.props.title}
        </div>
      );

    return (
      <div
        ref="element"
        style={componentStyle}
        {...props}
      >
        {controls}
        {title}
        {children}
      </div>
    );
  }
}

export default TitleBar;
