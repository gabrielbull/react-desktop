import React, { Component, PropTypes, Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import Label from '../Label';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',

    label: {
      marginRight: '10px',
      textAlign: 'right'
    }
  }
};

class Row extends Component {
  labelRefs = [];

  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object
  };

  get labels() {
    let labels = [];
    for (let labelRef of this.labelRefs) {
      labels = [...labels, this.refs[labelRef]];
    }
    return labels;
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { children, style, ...props } = this.props;

    children = Children.map(children, function (element, index) {
      if (element.type === Label) {
        let style = element.props.style ? mergeStyles(element.props.style, this.styles.label) : this.styles.label;
        let ref;
        if (element.props.ref) {
          ref = element.props.ref;
          this.labelRefs = [...this.labelRefs, element.props.ref];
        } else {
          ref = `label-${index}`;
          this.labelRefs = [...this.labelRefs, ref];
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

export default Row;
