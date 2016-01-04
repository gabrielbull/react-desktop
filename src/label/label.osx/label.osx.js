import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../Styling';

var styles = {
  label: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
    fontSize: '13px',
    whiteSpace: 'nowrap'
  },

  rowLabel: {
    textAlign: 'right',
    marginRight: '12px'
  }
};

class LabelOSX extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
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

  render() {
    const { children, style, color, row, form, align, display, visible, ...props } = this.props;

    let componentStyle = mergeStyles(styles.label, style);
    let componentColor = color;
    if (componentColor) {
      switch (componentColor) {
      case 'red': componentColor = '#fd2700'; break;
      }
      componentStyle = mergeStyles(componentStyle, { color: componentColor });
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

export default LabelOSX;
