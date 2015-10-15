import React, { Component, PropTypes, Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Styling, { mergeStyles, applyStyle } from './Styling';
import Row from './Form/Row';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default'
  }
};

class Form extends Component {
  static Row = Row;

  rowRefs = [];

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object
  };

  componentDidMount() {
    let allLabels = [];
    let maxWidth = 0;
    for (let row of this.rows) {
      for (let label of row.labels) {
        label = ReactDOM.findDOMNode(label);
        allLabels = [...allLabels, label];
        maxWidth =
          label.offsetWidth > maxWidth ? label.offsetWidth : maxWidth;
      }
    }
    maxWidth++;

    for (let label of allLabels) {
      label.style.width = `${maxWidth}px`;
    }
  }

  get rows() {
    let rows = [];
    for (let rowRef of this.rowRefs) {
      rows = [...rows, this.refs[rowRef]];
    }
    return rows;
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { children, style, ...props } = this.props;

    children = Children.map(children, function (element, index) {
      if (element.type === Row) {
        let ref;
        if (element.props.ref) {
          ref = element.props.ref;
          this.rowRefs = [...this.rowRefs, element.props.ref];
        } else {
          ref = `row-${index}`;
          this.rowRefs = [...this.rowRefs, ref];
        }
        return cloneElement(element, { style: style, ref: ref });
      }
      return element;
    }.bind(this));

    return (
      <div {...props} style={applyStyle(this.styles)}>
        {children}
      </div>
    );
  }
}

export default Form;
