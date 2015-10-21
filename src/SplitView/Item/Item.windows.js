import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../DesktopComponent';
import Content from '../Content/Content.windows';

const styles = {
  content: {
    width: '80%'
  }
};

@DesktopComponent
class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
  };

  render() {
    const { children, style, ...props } = this.props;

    let componentStyle = {
      ...styles.content,
      margin: this.props.margin,
      padding: this.props.padding,
      ...style
    };

    if (this.state.background) {
      componentStyle.backgroundColor = this.state.background;
    }

    return (
      <div
        style={componentStyle}
        {...props}
      >
        <Content>
          {children}
        </Content>
      </div>
    );
  }
}

export default Item;
