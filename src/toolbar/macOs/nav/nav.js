import React, { Component } from 'react';
import { Style } from 'radium';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';
import WindowFocus from '../../../windowFocus';

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center'
  }
};

@Dimension({ height: '54px' })
@WindowFocus()
class Nav extends Component {
  static propTypes = {
    ...dimensionPropTypes
  };

  render() {
    const { children, style, isWindowFocused, ...props } = this.props;
    let componentStyle = { ...styles.nav };

    let fillOpacity = '.8';
    if (!isWindowFocused) {
      componentStyle.opacity = '.5';
      fillOpacity = '.3';
    }

    return (
      <div style={{ ...componentStyle, ...style }} {...props}>
        <Style
          scopeSelector="._reactDesktop-Toolbar-Nav-Item-SVG"
          rules={{
            'a svg *': {
              fill: '#363336',
              fillOpacity
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
