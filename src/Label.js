import React, { Component, PropTypes } from 'react';
import Desktop from './Desktop';
import LabelOSX from './Label/Label.osx';
import TextBlockWindows from './TextBlock/TextBlock.windows';

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

  componentWillUpdate(nextProps, nextState) {
    if (nextState) {
      this.refs.component.setState(nextState);
    }
  }

  render() {
    if (Desktop.os === 'win') {
      return <TextBlockWindows ref="component" {...this.props}/>
    } else {
      return <LabelOSX ref="component" {...this.props}/>
    }
  }
}

export default Label;
