import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from './Styling';
import Controls from './TitleBar/Controls';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    display: 'flex',
    backgroundImage: '-webkit-linear-gradient(top, #ffffff 0px, #ededed 1px, #e7e7e7 2px, #d1d1d1 100%)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#afafaf',
    paddingLeft: '3px',
    paddingRight: '3px',

    title: {
      WebkitUserSelect: 'none',
      cursor: 'default',
      fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande"',
      fontSize: '13px',
      color: '#2e2e2e',
      flex: 1,
      textAlign: 'center',
      lineHeight: '21px',
      paddingRight: '60px'
    }
  }
};

@Styling
class TitleBar extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string
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
      <div style={this.styles.title}>
        {this.props.title}
      </div>
    </div>
    );
  }
}

export default TitleBar;
