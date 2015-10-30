import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../../Styling';

var styles = {
  item: {
    WebkitUserSelect: 'none',
    cursor: 'default',
  }
};

class Item extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
    control: PropTypes.any,
    tabId: PropTypes.number,
    style: PropTypes.object,
    title: PropTypes.string,
    selected: PropTypes.bool,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { selected: props.selected, visible: props.visible !== false, display: props.display !== false };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.selected });
    if (nextProps.selected) {
      this.props.control.select(this);
    } else {
      this.props.control.unselect(this);
    }
  }

  render() {
    const { control, style, title, children, selected, visible, display, ...props } = this.props;
    const content = this.state.selected ? children : '';

    let componentStyle = mergeStyles(style, styles.item, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {content}
      </div>
    );
  }
}

export default Item;
