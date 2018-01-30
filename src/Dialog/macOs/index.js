import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Margin, { marginPropTypes } from '../../style/margin';
import Alignment, {
  alignmentPropTypes,
  removeAlignmentProps
} from '../../style/alignment';
import Text from '../../Text/macOs';
import styles from './style/10.11';

@Margin({
  marginTop: '17px',
  marginBottom: '19px',
  marginLeft: '20px',
  marginRight: '20px'
})
class Dialog extends Component {
  static propTypes = {
    ...marginPropTypes,
    ...alignmentPropTypes,
    icon: PropTypes.element,
    title: PropTypes.string,
    message: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    buttons: PropTypes.array
  };

  isLast(...next) {
    let isLast = false;
    for (let i = 0, len = next.length; i < len; ++i) {
      if (next[i]) isLast = false;
    }
    return isLast;
  }

  render() {
    let {
      icon,
      style,
      title,
      message,
      children,
      buttons,
      ...props
    } = this.props;

    props = removeAlignmentProps(props);

    return (
      <div style={{ ...styles.container, ...style }} {...props}>
        {this.renderIcon(icon)}
        <div style={styles.contentContainer}>
          {this.renderTitle(title, this.isLast(message, children, buttons))}
          {this.renderMessage(message, this.isLast(children, buttons))}
          {this.renderChildren(children, this.isLast(buttons))}
          {this.renderButtons(buttons)}
        </div>
      </div>
    );
  }

  renderIcon(icon) {
    if (icon) {
      return (
        <div style={styles.icon} onMouseDown={e => e.preventDefault()}>
          {icon}
        </div>
      );
    }
    return null;
  }

  renderTitle(title, isLast) {
    const style = styles.title;
    if (isLast) delete style.marginBottom;
    if (title)
      return (
        <Text bold style={style}>
          {title}
        </Text>
      );
    return null;
  }

  renderMessage(message, isLast) {
    const style = styles.message;
    if (isLast) delete style.marginBottom;
    if (message) return <Text style={style}>{message}</Text>;
    return null;
  }

  renderChildren(children, isLast) {
    const style = styles.content;
    if (isLast) delete style.marginBottom;
    if (children)
      return Alignment(<div style={style}>{children}</div>, {
        ...this.props,
        layout: 'vertical'
      });
    return null;
  }

  renderButtons(buttons) {
    if (buttons) {
      return (
        <div style={styles.buttons}>
          {buttons.map((button, index) => (
            <div style={styles.buttonContainer} key={index}>
              {button}
            </div>
          ))}
        </div>
      );
    }
    return null;
  }
}

export default Dialog;
