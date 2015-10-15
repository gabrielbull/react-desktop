import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle, parseStyle } from '../Styling';
import WindowState from '../WindowState';

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
    paddingTop: '1px',
    paddingBottom: '1px',
    paddingLeft: '11px',
    paddingRight: '11px',
    lineHeight: '16px',
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
      borderRightColor: '#267ffc',
      color: 'rgba(255, 255, 255, .9)',
      borderRightWidth: '0px',
      paddingRight: '12px',
      paddingLeft: '12px',

      ':active': {
        backgroundImage: '-webkit-linear-gradient(top, #4c98fe 0%, #0564e3 100%) !important',
        borderTopColor: '#247fff !important',
        borderBottomColor: '#003ddb !important',
        borderLeftColor: '#125eed !important',
        borderRightColor: '#125eed !important',
        color: 'rgba(255, 255, 255, .9)'
      }
    },

    selectedUnfocused: {
      backgroundImage: '-webkit-linear-gradient(top, #e5e5e5 0%, #e5e5e5 100%)',
      borderTopColor: '#c7c7c7',
      borderBottomColor: '#a6a6a6',
      borderRightColor: '#b7b7b7',
      borderLeftColor: '#b7b7b7',
      borderRightWidth: '0px',
      paddingRight: '12px',
      paddingLeft: '12px',
      color: '#000000'
    },

    ':active': {
      backgroundColor: '#f0f0f0'
    }
  }
};

@WindowState
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
    this.state = { selected: props.selected, windowFocused: true };
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

    if (this.state.selected && this.state.windowFocused) {
      styles = mergeStyles(styles, this.styles.selected);
      if (this.props.firstChild) {
        styles = mergeStyles(styles, { paddingLeft: '11px' });
      }
      if (this.props.lastChild) {
        styles = mergeStyles(styles, { borderRightWidth: '1px' });
      }
      activeStyles = this.styles.selected[':active'];
    } else if (this.state.selected) {
      styles = mergeStyles(styles, this.styles.selectedUnfocused);
      if (this.props.firstChild) {
        styles = mergeStyles(styles, { paddingLeft: '11px' });
      }
      if (this.props.lastChild) {
        styles = mergeStyles(styles, { borderRightWidth: '1px' });
      }
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
