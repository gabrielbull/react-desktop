import React, { Component } from 'react';

const styles = {
  windows_10: {
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'no-drag',
    cursor: 'default',
    width: '46px',
    height: '28px',
    lineHeight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function button(ComposedComponent) {
  return class extends Component {
    get styles() {
      return styles.windows_10;
    };

    render() {
      return (
        <ComposedComponent ref="component" style={this.styles} {...this.props}/>
      );
    }
  };
}

export default button;
