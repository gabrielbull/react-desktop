import React, { Component } from 'react';
import DesktopComponent  from '../../DesktopComponent';

const styles = {
  title: {
    color: '#ffffff',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    textTransform: 'uppercase',
    padding: '0 24px'
  }
};

@DesktopComponent
class Title extends Component {
  render() {
    const { children } = this.props;

    return (
      <div style={styles.title}>
        {children}
      </div>
    );
  }
}

export default Title;
