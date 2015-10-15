import React, { Component, PropTypes, Children, cloneElement } from 'react';
import Styling, { mergeStyles, applyStyle } from './Styling';
import TitleBar from './TitleBar';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ececec',
    display: 'flex',
    flexDirection: 'column',

    chrome: {
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
      boxShadow: '0 0 1px rgba(0, 0, 0, .55),  0 5px 20px rgba(0, 0, 0, .2)'
    },

    content: {
      margin: '24px 20px 20px 20px'
    }
  }
};

class Window extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    chrome: PropTypes.bool
  };

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { style, chrome, children, ...props } = this.props;

    let styles = this.styles;
    if (chrome) {
      styles = mergeStyles(styles, this.styles.chrome);
    }

    const titleBar = Children.map(children, function (element, index) {
      if (element.type === TitleBar) {
        return element;
      }
    }.bind(this));

    children = Children.map(children, function (element, index) {
      if (element.type !== TitleBar) {
        return element;
      }
    }.bind(this));

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

export default Window;
