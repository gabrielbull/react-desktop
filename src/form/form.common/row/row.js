import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { get as getOs } from '../../../os';
import LabelOSX from '../../../label/label.osx/label';
import LabelWindows from '../../../label/label.windows/label';
import TextInputOSX from '../../../text-input/text-input.osx/text-input';
import TextInputWindows from '../../../text-input/text-input.windows/text-input';
import ButtonOSX from '../../../button/button.osx/button';
import ButtonWindows from '../../../button/button.windows/button';

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
    let componentStyle = mergeStyles(style, styles.row, getOs() === 'win' ? styles.rowWin : styles.rowOsx);

    children = Children.map(children, (element) => {
      if (element.type === LabelOSX || element.type === LabelWindows) {
        isButtonsRow = false;
      } else if (element.type === TextInputOSX || element.type === TextInputWindows) {
        isButtonsRow = false;
      } else if (
        (element.type === ButtonOSX || element.type === ButtonWindows) &&
        isButtonsRow === null
      ) {
        isButtonsRow = true;
      }
      return cloneElement(element, { form: form, row: this });
    });

    if (isButtonsRow) {
      componentStyle = mergeStyles(componentStyle, getOs() === 'win' ? styles.buttonRowWin : styles.buttonRowOsx);
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
