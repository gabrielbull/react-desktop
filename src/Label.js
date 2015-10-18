import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import LabelOSX from './Label/Label.osx';
import LabelWindows from './Label/Label.windows';

class Label extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    color: PropTypes.string,
    row: PropTypes.any,
    form: PropTypes.any,
    align: PropTypes.string,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  render() {
    if (Desktop.os === 'win') {
      return <LabelWindows {...this.props}/>
    } else {
      return <LabelOSX {...this.props}/>
    }
  }
}

export default Label;
