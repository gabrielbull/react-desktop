import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle, parseStyle } from '../Styling';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ffffff',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#c7c7c7',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#a6a6a6',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: '#d8d8d8',
    paddingTop: '1.5px',
    paddingBottom: 0,
    paddingLeft: '11px',
    paddingRight: '11px',
    lineHeight: '16.5px',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande"',
    fontSize: '13px',
    boxShadow: '0 1px rgba(0, 0, 0, .039), 0 0 .5px rgba(0, 0, 0, .1)',

    firstChild: {
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
      borderLeftColor: '#b8b8b8',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px'
    },

    lastChild: {
      borderRightColor: '#b8b8b8',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px'
    },

    nextSelected: {
      borderRightWidth: '0px'
    },

    selected: {
      backgroundImage: '-webkit-linear-gradient(top, #6cb3fa 0%, #087eff 100%)',
      borderTopColor: '#4ca2f9',
      borderBottomColor: '#015cff',
      borderLeftColor: '#267ffc',
      color: 'rgba(255, 255, 255, .9)',
      borderRightWidth: '0px',
      paddingRight: '12px',
      paddingLeft: '12px',

      ':active': {
        backgroundImage: '-webkit-linear-gradient(top, #4c98fe 0%, #0564e3 100%) !important',
        borderTopColor: '#247fff',
        borderBottomColor: '#003ddb',
        borderLeftColor: '#125eed',
        borderRightColor: '#125eed',
        color: 'rgba(255, 255, 255, .9)'
      }
    },

    ':active': {
      backgroundColor: '#f0f0f0'
    }
  }
};

@Styling
class Tab extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    firstChild: PropTypes.bool,
    lastChild: PropTypes.bool,
    nextSelected: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { selected: props.selected };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11);
  }

  render() {
    let styles = this.styles;
    let activeStyles;

    if (this.props.firstChild) {
      styles = mergeStyles(styles, this.styles.firstChild);
    }

    if (this.props.lastChild) {
      styles = mergeStyles(styles, this.styles.lastChild);
    }

    if (this.props.nextSelected) {
      styles = mergeStyles(styles, this.styles.nextSelected);
    }

    if (this.state.selected) {
      styles = mergeStyles(styles, this.styles.selected);
      if (this.props.firstChild) {
        styles = mergeStyles(styles, { paddingLeft: '11px' });
      }
      activeStyles = this.styles.selected[':active'];
    }

    return (
      <div
        ref="element"
        style={applyStyle(styles)}
        onClick={this.props.onPress}
        data-active-style={parseStyle(activeStyles)}
      >
        {this.props.title}
      </div>
    );
  }
}

export default Tab;
