import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../DesktopComponent';
import Content from '../Content/Content.windows';

const styles = {
  content: {
    flexGrow: '1',
    flexShrink: '0',
    display: 'flex'
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

  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.selected });
  }

  render() {
    const { children, style, ...props } = this.props;

    let componentStyle = {...styles.content, ...style};

    if (!this.state.selected) {
      componentStyle.display = 'none';
    }

    return (
      <div
        style={componentStyle}
      >
        <Content {...props}>{children}</Content>
      </div>
    );
  }
}

export default Item;
