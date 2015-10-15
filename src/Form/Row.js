import React, { Component, PropTypes, Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import Label from '../Label';
import TextField from '../TextField';
import PushButton from '../PushButton';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',

    label: {
      marginRight: '10px',
      textAlign: 'right'
    },

    buttonRow: {
      marginTop: '24px',
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
    let isButtonsRow = null;

    children = Children.map(children, function (element, index) {
      if (element.type === Label) {
        isButtonsRow = false;
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
      } else if (element.type === TextField) {
        isButtonsRow = false;
      } else if (element.type === PushButton && isButtonsRow === null) {
        isButtonsRow = true;
      }
      return element;
    }.bind(this));

    let styles = this.styles;
    if (isButtonsRow) {
      styles = mergeStyles(styles, this.styles.buttonRow);
    }

    return (
      <div {...props} style={applyStyle(styles)}>
        {children}
      </div>
    );
  }
}

export default Row;
