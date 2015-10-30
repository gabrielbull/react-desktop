import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { mergeStyles } from '../../Styling';
import Desktop from '../../Desktop';
import Label from '../../Label';
import LabelOSX from '../../Label/Label.osx';
import LabelWindows from '../../TextBlock/TextBlock.windows';
import TextInput from '../../TextInput';
import TextFieldOSX from '../../TextInput/TextField.osx';
import TextBoxWindows from '../../TextInput/TextBox.windows';
import Button from '../../Button';
import PushButtonOSX from '../../Button/PushButton.osx';
import ButtonWindows from '../../Button/Button.windows';

var styles = {
  row: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  rowOsx: {
    marginBottom: '20px'
  },

  rowWin: {
    marginBottom: '12px'
  },

  buttonRowOsx: {
    marginTop: '4px'
  },

  buttonRowWin: {
    marginTop: '30px'
  }
};

class Row extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
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

  render() {
    let { children, style, form, display, visible, ...props } = this.props;
    let isButtonsRow = null;
    let componentStyle = mergeStyles(style, styles.row, Desktop.os === 'win' ? styles.rowWin : styles.rowOsx);

    children = Children.map(children, (element) => {
      if (element.type === Label || element.type === LabelOSX || element.type === LabelWindows) {
        isButtonsRow = false;
      } else if (element.type === TextInput || element.type === TextFieldOSX || element.type === TextBoxWindows) {
        isButtonsRow = false;
      } else if (
        (element.type === Button || element.type === PushButtonOSX || element.type === ButtonWindows) &&
        isButtonsRow === null
      ) {
        isButtonsRow = true;
      }
      return cloneElement(element, { form: form, row: this });
    });

    if (isButtonsRow) {
      componentStyle = mergeStyles(componentStyle, Desktop.os === 'win' ? styles.buttonRowWin : styles.buttonRowOsx);
    }

    componentStyle = mergeStyles(componentStyle, styles.row, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'flex' : 'none'
    });

    return (
      <div style={componentStyle} {...props}>
        {children}
      </div>
    );
  }
}

export default Row;
