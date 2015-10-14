import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from './Styling';
import Controls from './TitleBar/Controls';

var styles = {
  osx_10_11: {
    display: 'flex',
    backgroundColor: '#e8e8e8',
    paddingLeft: '3px',
    paddingRight: '3px',

    'title': {

    }
  }
};

@Styling
class TitleBar extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    return (
    <div
      ref="element"
      {...this.props}
      style={applyStyle(this.styles)}
    >
      <Controls/>
      <div>Title</div>
    </div>
    );
  }
}

export default TitleBar;
