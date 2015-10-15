import React, { Component, PropTypes, Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Styling, { mergeStyles, applyStyle } from './Styling';
import Row from './Form/Row';
import Label from './Label';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',

    label: {
      marginBottom: '20px'
    }
  }
};

class Form extends Component {
  static Row = Row;

  rowRefs = [];

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    onSubmit: PropTypes.func
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

  submit = event => {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  };

  render() {
    let { onSubmit, children, style, ...props } = this.props;

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
      } else if (element.type === Label) {
        return cloneElement(element, { style: mergeStyles({}, element.props.style, this.styles.label) });
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
