import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../../Styling';
import WindowState from '../../WindowState';

var styles = {
  tab: {
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
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
    fontSize: '13px',
    boxShadow: '0 1px rgba(0, 0, 0, .039), 0 0 .5px rgba(0, 0, 0, .1)',

    ':active': {
      backgroundColor: '#f0f0f0'
    }
  },

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
  },

  selectedActive: {
    backgroundImage: '-webkit-linear-gradient(top, #4c98fe 0%, #0564e3 100%) !important',
    borderTopColor: '#247fff !important',
    borderBottomColor: '#003ddb !important',
    borderLeftColor: '#125eed !important',
    borderRightColor: '#125eed !important',
    color: 'rgba(255, 255, 255, .9)'
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
  }
};

@WindowState
@Styling
class Tab extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    selected: PropTypes.bool.isRequired,
    tabId: PropTypes.number,
    firstChild: PropTypes.bool,
    lastChild: PropTypes.bool,
    nextSelected: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      windowFocused: true,
      activeStyle: null
    };
  }

  render() {
    let { style, nextSelected, ...props } = this.props;

    let cssStyle = styles.tab;
    let componentStyle = style;

    if (this.props.firstChild) {
      componentStyle = mergeStyles(componentStyle, styles.firstChild);
    }

    if (this.props.lastChild) {
      componentStyle = mergeStyles(componentStyle, styles.lastChild);
    }

    if (nextSelected) {
      componentStyle = mergeStyles(componentStyle, styles.nextSelected);
    }

    if (this.state.selected && this.state.windowFocused) {
      componentStyle = mergeStyles(componentStyle, styles.selected);
      if (this.props.firstChild) {
        componentStyle = mergeStyles(componentStyle, { paddingLeft: '11px' });
      }
      if (this.props.lastChild) {
        componentStyle = mergeStyles(componentStyle, { borderRightWidth: '1px', paddingRight: '11px' });
      }
      cssStyle = mergeStyles(cssStyle, { ':active': styles.selectedActive });
    } else if (this.state.selected) {
      componentStyle = mergeStyles(componentStyle, styles.selectedUnfocused);
      if (this.props.firstChild) {
        componentStyle = mergeStyles(componentStyle, { paddingLeft: '11px' });
      }
      if (this.props.lastChild) {
        componentStyle = mergeStyles(componentStyle, { borderRightWidth: '1px', paddingRight: '11px' });
      }
    }

    return (
      <div
        ref="element"
        onClick={this.props.onPress}
        data-style={applyStyle(cssStyle)}
        style={componentStyle}
      >
        {this.props.title}
      </div>
    );
  }
}

export default Tab;
