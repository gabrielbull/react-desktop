import React, { Component, PropTypes, Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Styling, { mergeStyles, applyStyle } from './Styling';
import Row from './Form/Row';
import Label from './Label';
import RowWrapper from './Form/RowWrapper';

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

  labels = [];
  rows = [];

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    onSubmit: PropTypes.func
  };

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
      label = ReactDOM.findDOMNode(label);
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

    for(var prop in this.refs) {
        if(this.refs.hasOwnProperty(prop)) {
          let row = ReactDOM.findDOMNode(this.refs[prop]);
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
    return mergeStyles(styles.osx_10_11, this.props.style);
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
          style: mergeStyles({}, element.props.style, { marginBottom: '0' })
        });
      }

      if (element.type === Row) {
        let ref = `row-${index}`;
        return (
          <RowWrapper ref={ref} style={style}>
            {cloneElement(element, { form: this })}
          </RowWrapper>
        );
      } else if (element.type === Label) {
        let ref = `label-${index}`;
        return (
          <RowWrapper ref={ref} style={this.styles.label}>
            {cloneElement(element, { form: this })}
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
