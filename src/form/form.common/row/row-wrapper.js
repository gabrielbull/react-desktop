import React, { Component, Children, PropTypes } from 'react';
import Row from './row';
import LabelOSX from '../../../label/label.osx/label';
import LabelWindows from '../../../label/label.windows/label';

class RowWrapper extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
    style: PropTypes.object,
    form: PropTypes.any
  };

  get labels() {
    let labels = [];
    if (this.props) {
      Children.map(this.props.children, function (child) {
        if (child.type === Row) {
          Children.map(child.props.children, function (child) {
            if (child.type === LabelOSX || child.type === LabelWindows) {
              labels = [...labels, child];
            }
          });
        }
      });
    }
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
