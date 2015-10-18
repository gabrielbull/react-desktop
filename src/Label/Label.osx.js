import React, { Component, PropTypes } from 'react';
import { mergeStyles, applyStyle } from '../Styling';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande"',
    fontSize: '13px',
    whiteSpace: 'nowrap',

    rowLabel: {
      textAlign: 'right',
      marginRight: '12px'
    }
  }
};

class LabelOSX extends Component {
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
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { children, style, color, row, form, align, display, visible, ...props } = this.props;

    let styles = this.styles;
    if (color) {
      switch (color) {
      case 'red': color = '#fd2700'; break;
      }
      styles = mergeStyles(styles, { color: color });
    }

    if (row) {
      styles = mergeStyles(styles, this.styles.rowLabel);
    }

    if (align) {
      styles = mergeStyles(styles, { textAlign: align });
    }

    if (!this.state.visible) {
      styles = mergeStyles(styles, { visibility: 'hidden' });
    } else {
      styles = mergeStyles(styles, { visibility: 'visible' });
    }

    if (!this.state.display) {
      styles = mergeStyles(styles, { display: 'none' });
    } else {
      styles = mergeStyles(styles, { display: 'block' });
    }

    return (
      <div ref="label" {...props} style={applyStyle(styles)}>
        {children}
      </div>
    );
  }
}

export default LabelOSX;
