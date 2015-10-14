import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    width: '10px',
    height: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50%',
    marginBottom: '.5px',
    marginLeft: '4px',
    marginRight: '4px',
    lineHeight: 0
  }
};

function button(ComposedComponent) {
  return class extends Component {
    get styles() {
      return styles.osx_10_11;
    };

    mouseEnter() {
      this.refs.component.setState({iconVisible: true});
    }

    mouseLeave() {
      this.refs.component.setState({iconVisible: false});
    }

    render() {
      return (
        <ComposedComponent ref="component" style={this.styles} {...this.props}/>
      );
    }
  };
}

export default button;
