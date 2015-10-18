import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { mergeStyles, applyStyle } from '../Styling';
import Label from '../Label';
import TextField from '../TextField';
import PushButton from '../Button/PushButton.osx';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',

    buttonRow: {
      marginTop: '4px'
    }
  }
};

class Row extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  componentDidMount() {
    if (this.props.form) {
      this.props.form.registerRow(this);
    }
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { children, style, form, display, visible, ...props } = this.props;
    let isButtonsRow = null;

    children = Children.map(children, function (element) {
      if (element.type === Label) {
        isButtonsRow = false;
      } else if (element.type === TextField) {
        isButtonsRow = false;
      } else if (element.type === PushButton && isButtonsRow === null) {
        isButtonsRow = true;
      }
      return cloneElement(element, { form: form, row: this });
    }.bind(this));

    let styles = this.styles;
    if (isButtonsRow) {
      styles = mergeStyles(styles, this.styles.buttonRow);
    }

    styles = mergeStyles(styles, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    });

    return (
      <div {...props} style={applyStyle(styles)}>
        {children}
      </div>
    );
  }
}

export default Row;
