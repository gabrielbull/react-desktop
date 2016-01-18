import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import DesktopComponent from '../../desktop-component';
import { get as getOs } from '../../os';
import Row from './row/row';
import RowWrapper from './row/row-wrapper';
import LabelOSX from '../../label/label.osx/label';
import LabelWindows from '../../label/label.windows/label';

var styles = {
  table: {
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  labelRowOsx: {
    marginBottom: '20px'
  },

  labelRowWin: {
    marginBottom: '10px'
  }
};

@DesktopComponent
class Form extends Component {
  static Row = Row;

  labels = [];
  rows = [];

  static propTypes = {
    onSubmit: PropTypes.func
  };

  registerRow(row) {
    this.rows = [...this.rows, row];
    if (getOs() === 'win') {
      this.applyWithToRows();
    }
  }

  registerLabel(label) {
    this.labels = [...this.labels, label];
    if (getOs() === 'osx') {
      this.applyWithToLabels();
      this.applyWithToRows();
    }
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

  submit = event => {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  };

  render() {
    let { onSubmit, children, style, ...props } = this.props;
    let componentStyle = { ...styles.table, ...style };

    children = Children.map(children, (element, index) => {
      const isLast = index + 1 === Children.count(children);
      if (isLast) {
        element = cloneElement(element, {
          style: { ...element.props.style, marginBottom: '0' }
        });
      }

      if (element.type === Row) {
        const ref = `row-${index}`;
        return (
          <RowWrapper ref={ref} style={style}>
            {cloneElement(element, { form: this })}
          </RowWrapper>
        );
      } else if (element.type === LabelOSX || element.type === LabelWindows) {
        const ref = `label-${index}`;
        return (
          <RowWrapper ref={ref} style={getOs() === 'win' ? styles.labelRowWin : styles.labelRowOsx}>
            {cloneElement(element, { form: this })}
          </RowWrapper>
        );
      }
      return element;
    });

    return (
      <form
        onSubmit={this.submit}
        style={componentStyle}
        {...props}
      >
        {children}
      </form>
    );
  }
}

export default Form;
