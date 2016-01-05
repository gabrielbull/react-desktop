import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../../desktop-component';
import Title from './title';

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
    parentTheme: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
  };

  constructor(props, context, updater) {
    const { parentTheme, selected, ...properties } = props;
    super(properties, context, updater);
    this.state = {
      selected: selected,
      parentTheme: parentTheme
    };
  }

  get item() {
    return this.context.parent;
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.refs.title) {
      this.refs.title.setState({
        selected: nextState.selected,
        parentTheme: nextState.parentTheme
      });
    }
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
        <Title
          ref="title"
          selected={this.state.selected}
          parentTheme={this.state.parentTheme}
          previousTitle={this.item.splitView.currentTitle}
        >
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
