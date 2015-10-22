import React, { Component } from 'react';
import DesktopComponent  from '../../DesktopComponent';

const styles = {
  title: {
    color: '#000000',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    textTransform: 'uppercase',
    padding: '0 24px'
  },

  titleDark: {
    color: '#ffffff',
  }
};

@DesktopComponent
class Title extends Component {
  constructor(props, context, updater) {
    const { parentRequestedTheme, ...properties } = props;
    super(properties, context, updater);
    this.state = {
      parentRequestedTheme: parentRequestedTheme
    };
  }

  omponentWillAppear() {
    console.log(this.props);
    console.log('mount me bitch');
  }

  render() {
    const { style, children } = this.props;
    let componentStyle = {...styles.title, ...style};

    if (this.state.parentRequestedTheme === 'dark') {
      componentStyle = {...componentStyle, ...styles.titleDark};
    }

    return (
      <div style={componentStyle}>
        {children}
      </div>
    );
  }
}

export default Title;
