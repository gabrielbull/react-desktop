import React, { Component, PropTypes } from 'react';

class Example extends Component {
  constructor() {
    super();

    this.state = {
      expanded: localStorage['demo-expanded'] ? true : false
    };
  }

  toggle = () => {
    localStorage['demo-expanded'] = !this.state.expanded;
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    let children;
    if (this.state.expanded) {
      children = (
        <div className="container">
          {this.props.children}
        </div>
      );
    }

    return (
      <div className="example">
        <h4 onClick={this.toggle}>Demo</h4>
        {children}
      </div>
    );
  }
}

export default Example;
