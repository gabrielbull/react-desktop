import React, { Component, PropTypes } from 'react';
import Text from '../../../../text/macOs/text';

const styles = {
  container: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1px',
    marginLeft: '5px',
    marginRight: '5px',
    width: '64px'
  },
  iconContainer: {
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: '1px'
  }
};

class Item extends Component {
  static propTypes = {
    name: PropTypes.string,
    icon: PropTypes.element,
  };

  isSvg(icon) {
    return icon.type === 'svg';
  }

  render() {
    const { name, icon, style, ...props } = this.props;

    this.isSvg(icon);

    return (
      <div className="_reactDesktop-Toolbar-Nav-Item-SVG">
        <a
          style={{ ...styles.container, ...style }}
          {...props}
        >
          <div style={styles.iconContainer}>
            {icon}
          </div>
          <Text size="11" color="#1e1c1e">{name}</Text>
        </a>
      </div>
    );
  }
}

export default Item;
