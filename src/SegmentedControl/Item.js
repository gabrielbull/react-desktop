import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
  }
};

class Box extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object
  };

  constructor(props) {
    super();
    this.state = { selected: props.selected };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    const { title, children, selected, ...props } = this.props;
    const content = this.state.selected ? children : '';

    return (
      <div {...props} style={applyStyle(this.styles)}>
        {content}
      </div>
    );
  }
}

export default Box;
