import React, { Component, PropTypes } from 'react';
import { Style } from 'radium';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center'
  }
};

@Dimension({ height: '54px' })
class Nav extends Component {
  static propTypes = {
    ...dimensionPropTypes
  };

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
        <Style
          scopeSelector="._reactDesktop-Toolbar-Nav-Item-SVG._selected"
          rules={{
            'a svg *': {
              fill: '#007bfa',
              fillOpacity: '1'
            },
            'a:active svg *': {
              fill: '#003dd6',
              fillOpacity: '1'
            }
          }}
        />
        {children}
      </div>
    );
  }
}

export default Nav;
