import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../Styling';

var styles = {
  textBlock: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    lineHeight: '25.96px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '12px',
    whiteSpace: 'nowrap',
  },

  rowLabel: {
    textAlign: 'right',
    marginRight: '12px'
  }
};

class TextBlockWindows extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    color: PropTypes.string,
    row: PropTypes.any,
    form: PropTypes.any,
    align: PropTypes.string,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  componentDidMount() {
    if (this.props.row && this.props.form) {
      this.props.form.registerLabel(this);
    }
  }

  get styles() {
    return mergeStyles(styles.textBlock, this.props.style);
  }

  render() {
    let { children, style, color, row, form, align, display, visible, ...props } = this.props;
    let componentStyle = this.styles;

    if (color) {
      switch (color) {
        case 'red': color = '#fd2700'; break;
      }
      componentStyle = mergeStyles(componentStyle, { color: color });
    }

    if (row) {
      componentStyle = mergeStyles(componentStyle, styles.rowLabel);
    }

    if (align) {
      componentStyle = mergeStyles(componentStyle, { textAlign: align });
    }

    componentStyle = mergeStyles(componentStyle, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <div
        ref="label"
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default TextBlockWindows;
