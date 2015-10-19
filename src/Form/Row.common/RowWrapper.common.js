import React, { Component, Children, PropTypes } from 'react';
import Row from './Row.common';
import Label from '../../Label';
import LabelOSX from '../../Label/Label.osx';
import LabelWindows from '../../Label/Label.windows';

class RowWrapper extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    form: PropTypes.any
  };

  get labels() {
    let labels = [];
    Children.map(this.props.children, function (child) {
      if (child.type === Row) {
        Children.map(child.props.children, function (child) {
          if (child.type === Label || child.type === LabelOSX || child.type === LabelWindows) {
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
