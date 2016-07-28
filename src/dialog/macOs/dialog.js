import React, { Component, PropTypes } from 'react';
import Margin, { marginPropTypes } from '../../style/margin';
import Alignment, { alignmentPropTypes, removeAlignmentProps } from '../../style/alignment';
import Text from '../../text/macOs/text';

const styles = {
  container: {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    WebkitUserDrag: 'none',
    userDrag: 'none',
    WebkitTouchCallout: 'none',
    display: 'flex'
  },
  icon: {
    width: '67px',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1
  },
  title: {
    marginBottom: '5px'
  },
  message: {
    marginBottom: '16px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column', // row | row-reverse | column | column-reverse
    flexWrap: 'nowrap', // nowrap | wrap | wrap-reverse
    justifyContent: 'flex-start', // flex-start | flex-end | center | space-between | space-around
    alignItems: 'flex-start', // flex-start | flex-end | center | space-between | space-around | stretch
    alignContent: 'flex-start', // flex-start | flex-end | center | space-between | space-around | stretch
    marginBottom: '16px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    marginLeft: '14px'
  }
};

@Margin({ marginTop: '17px', marginBottom: '19px', marginLeft: '20px', marginRight: '20px' })
class Dialog extends Component {
  static propTypes = {
    ...marginPropTypes,
    ...alignmentPropTypes,
    icon: PropTypes.element,
    title: PropTypes.string,
    message: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    buttons: PropTypes.array,
  };

  isLast(...next) {
    let isLast = false;
    for (let i = 0, len = next.length; i < len; ++i) {
      if (next[i]) isLast = false;
    }
    return isLast;
  }

  render() {
    let { icon, style, title, message, children, buttons, ...props } = this.props;

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
    if (title) return <Text bold style={style}>{title}</Text>;
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
    if (children) return Alignment(<div style={style}>{children}</div>, { ...this.props, layout: 'vertical' });
    return null;
  }

  renderButtons(buttons) {
    if (buttons) {
      return (
        <div style={styles.buttons}>
          {buttons.map((button, index) => <div style={styles.buttonContainer} key={index}>{button}</div>)}
        </div>
      );
    }
    return null;
  }
}

export default Dialog;
