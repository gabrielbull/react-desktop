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
    display: 'flex',
    flex: '1',
    flexDirection: 'column'
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
    const { parentRequestedTheme, selected, ...properties } = props;
    super(properties, context, updater);
    this.state = {
      selected: selected,
      parentRequestedTheme: parentRequestedTheme
    };
  }

  get item() {
    return this.context.parent;
  }

  componentWillUpdate(nextProps, nextState) {
    this.refs.title.setState({
      selected: nextState.selected,
      parentRequestedTheme: nextState.parentRequestedTheme
    });
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
        <Title ref="title" selected={this.state.selected} parentRequestedTheme={this.state.parentRequestedTheme}>
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
