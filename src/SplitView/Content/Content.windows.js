import React, { Component } from 'react';
import DesktopComponent  from '../../DesktopComponent';

const styles = {
  content: {
    width: '80%'
  }
};

@DesktopComponent
class Content extends Component {
  render() {
    const { children, style, ...props } = this.props;
    let componentStyle = {...styles.content, ...style};
    if (this.state.background) {
      componentStyle.backgroundColor = this.state.background;
    }

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Content;
