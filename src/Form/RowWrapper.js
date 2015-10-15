import React, { Component, Children, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import Label from '../Label';

class RowWrapper extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    form: PropTypes.element
  };

  get labels() {
    let labels = [];
    Children.map(this.props.children, function (child, index) {
      if (child.type === Row) {
        Children.map(child.props.children, function (child, index) {
          if (child.type === Label) {
            labels = [...labels, child];
          }
        });
      }
    });
    return labels;
  }

  render() {
    const { style, children, ...props } = this.props;

    return (
      <div ref="element" style={style} {...props}>
        {children}
      </div>
    );
  }
}

export default RowWrapper;
