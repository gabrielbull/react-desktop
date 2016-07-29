import React, { Component, PropTypes } from 'react';
import { Style } from 'radium';

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'row', // row | row-reverse | column | column-reverse
    flexWrap: 'nowrap', // nowrap | wrap | wrap-reverse
    justifyContent: 'flex-start', // flex-start | flex-end | center | space-between | space-around
    alignItems: 'flex-start', // flex-start | flex-end | center | space-between | space-around | stretch
    alignContent: 'flex-start' // flex-start | flex-end | center | space-between | space-around | stretch
  }
};

class Nav extends Component {
  render() {
    const { children, style, ...props } = this.props;

    return (
      <div style={{ ...styles.nav, ...style }} {...props}>
        <Style
          scopeSelector="._reactDesktop-Toolbar-Nav-Item-SVG"
          rules={{
            'a svg *': {
              fill: '#363336',
              fillOpacity: '.8'
            },
            'a:active svg *': {
              fill: '#1e1c1e',
              fillOpacity: '.9'
            }
          }}
        />
        {children}
      </div>
    );
  }
}

export default Nav;
