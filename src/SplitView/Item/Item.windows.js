import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../DesktopComponent';
import Content from '../Content/Content.windows';

const styles = {
  content: {
    flex: '1'
  }
};

@DesktopComponent
class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    margin: PropTypes.string,
    padding: PropTypes.string,
    selected: PropTypes.bool
  };

  constructor(props, context, updater) {
    const {selected, ...properties} = props;
    super(properties, context, updater);
    this.state = {
      selected: selected
    };
  }

  render() {
    const { children, style, ...props } = this.props;

    if (!this.state.selected) {
      return null;
    }

    return (
      <div
        style={{...styles.content, ...style}}
      >
        <Content {...props}>{children}</Content>
      </div>
    );
  }
}

export default Item;
