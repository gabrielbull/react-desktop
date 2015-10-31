import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../Styling';

var styles = {
  toolbar: {
    WebkitUserSelect: 'none',
    cursor: 'default'
  }
};

class Toolbar extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  get styles() {
    if (this.props) {
      return mergeStyles(styles.toolbar, this.props.style);
    }
    return mergeStyles(styles.toolbar);
  }

  render() {
    const { style, visible, display, ...props } = this.props;
    const styles = mergeStyles(this.styles, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <div style={styles} {...props}>
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;
