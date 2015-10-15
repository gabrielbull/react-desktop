import React, { Component, PropTypes, Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Styling, { mergeStyles, applyStyle } from './Styling';
import Row from './Form/Row';
import Label from './Label';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    label: {
      marginBottom: '20px'
    }
  }
};

class Form extends Component {
  static Row = Row;

  rowRefs = [];
  otherRefs = [];

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    onSubmit: PropTypes.func
  };

  componentDidMount() {
    this.applyWithToRows();
  }

  applyWithToRows() {
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

    maxWidth = 0;
    for (let row of this.rows) {
      row = ReactDOM.findDOMNode(row);
      maxWidth =
        row.offsetWidth > maxWidth ? row.offsetWidth : maxWidth;
    }

    for (let element of this.otherElements) {
      element = ReactDOM.findDOMNode(element);
      element.style.width = `${maxWidth}px`;
    }
  }

  get rows() {
    let rows = [];
    for (let rowRef of this.rowRefs) {
      rows = [...rows, this.refs[rowRef]];
    }
    return rows;
  }

  get otherElements() {
    let elements = [];
    for (let otherRef of this.otherRefs) {
      elements = [...elements, this.refs[otherRef]];
    }
    return elements;
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  submit = event => {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  };

  getRefKey = (props, prefix, index) => {
    return props.ref ? props.ref : `${prefix}-${index}`;
  };

  render() {
    let { onSubmit, children, style, ...props } = this.props;

    children = Children.map(children, function (element, index) {
      if (element.type === Row) {
        let ref = this.getRefKey(element.props, 'row', index);
        this.rowRefs = [...this.rowRefs, ref];
        return cloneElement(element, { style: style, ref: ref });
      } else if (element.type === Label) {
        let ref = this.getRefKey(element.props, 'label', index);
        this.otherRefs = [...this.otherRefs, ref];
        return cloneElement(element, { ref: ref, style: mergeStyles({}, element.props.style, this.styles.label) });
      }
      return element;
    }.bind(this));

    let lastRow = children[children.length - 1];
    children[children.length - 1] = cloneElement(lastRow, {
      style: mergeStyles({}, lastRow.props.style, { marginBottom: '0' })
    });

    return (
      <form {...props} onSubmit={this.submit.bind(this)} style={applyStyle(this.styles)}>
        {children}
      </form>
    );
  }
}

export default Form;
