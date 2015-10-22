import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../DesktopComponent';
import Title from '../Content/Title.windows';

const styles = {
  content: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column'
  },

  component: {
    flex: '1'
  }
};

@DesktopComponent
class Content extends Component {
  static propTypes = {
    title: PropTypes.string,
    parentRequestedTheme: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
  };

  constructor(props, context, updater) {
    const { parentRequestedTheme, ...properties } = props;
    super(properties, context, updater);
    this.state = {
      parentRequestedTheme: parentRequestedTheme
    };
  }

  componentWillUpdate(nextProps, nextState) {
    this.refs.title.setState({parentRequestedTheme: nextState.parentRequestedTheme});
  }

  render() {
    const { children, parentRequestTheme, style, title, icon, ...props } = this.props;

    let componentStyle = {
      ...styles.component,
      margin: this.props.margin,
      padding: this.props.padding,
      ...style
    };

    if (this.state.background) {
      componentStyle.backgroundColor = this.state.background;
    }

    return (
      <div style={styles.content} {...props}>
        <Title ref="title" parentRequestedTheme={this.state.parentRequestedTheme}>
          {title}
        </Title>
        <div style={componentStyle}>
          {children}
        </div>
      </div>
    );
  }
}

export default Content;
