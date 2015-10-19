import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import { mergeStyles, applyStyle } from '../Styling';
import Row from './Row/Row';
import RowWrapper from './Row/RowWrapper';
import Label from '../Label';
import LabelOSX from '../Label/Label.osx';
import LabelWindows from '../Label/Label.windows';

var styles = {
  common: {
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

  labels = [];
  rows = [];

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    onSubmit: PropTypes.func,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  registerRow(row) {
    this.rows = [...this.rows, row];
  }

  registerLabel(label) {
    this.labels = [...this.labels, label];
    this.applyWithToLabels();
    this.applyWithToRows();
  }

  applyWithToLabels() {
    let maxWidth = 0;
    let labels = [];
    for (let label of this.labels) {
      label = findDOMNode(label);
      labels = [...labels, label];
      maxWidth =
        label.offsetWidth > maxWidth ? label.offsetWidth : maxWidth;
    }
    for (let label of labels) {
      label.style.width = `${maxWidth + 1}px`;
    }
  }

  applyWithToRows() {
    let maxWidth = 0;
    let rows = [];

    for (var prop in this.refs) {
      if (this.refs.hasOwnProperty(prop)) {
        let row = findDOMNode(this.refs[prop]);
        rows = [...rows, row];
        maxWidth =
          row.offsetWidth > maxWidth ? row.offsetWidth : maxWidth;
      }
    }

    for (let row of rows) {
      row.style.width = `${maxWidth}px`;
    }
  }

  get styles() {
    return mergeStyles(styles.common, this.props.style);
  }

  submit = event => {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  };

  render() {
    let { onSubmit, children, style, ...props } = this.props;

    children = Children.map(children, function (element, index) {
      const isLast = index + 1 === Children.count(children);
      if (isLast) {
        element = cloneElement(element, {
          style: mergeStyles({}, element.props.style, {marginBottom: '0'})
        });
      }

      if (element.type === Row) {
        const ref = `row-${index}`;
        return (
          <RowWrapper ref={ref} style={style}>
            {cloneElement(element, {form: this})}
          </RowWrapper>
        );
      } else if (element.type === Label || element.type === LabelOSX || element.type === LabelWindows) {
        const ref = `label-${index}`;
        return (
          <RowWrapper ref={ref} style={this.styles.label}>
            {cloneElement(element, {form: this})}
          </RowWrapper>
        );
      }
      return element;
    }.bind(this));

    return (
      <form {...props} onSubmit={this.submit.bind(this)} style={applyStyle(this.styles)}>
        {children}
      </form>
    );
  }
}

export default Form;
