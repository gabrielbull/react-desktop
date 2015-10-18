import React, { Component, PropTypes } from 'react';
import { mergeStyles } from './Styling';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default'
  }
};

class Toolbar extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    const {style, visible, display, ...props } = this.props;
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
