import React, { Component, PropTypes } from 'react';
import DesktopComponent  from '../../DesktopComponent';
import Content from '../Content/Content.windows';

const styles = {
  content: {
    position: 'relative',
    flexGrow: '1',
    flexShrink: '0',
    display: 'flex'
  }
};

@DesktopComponent
class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    margin: PropTypes.string,
    padding: PropTypes.string,
    selected: PropTypes.bool,
    storageKey: PropTypes.number
  };

  static contextTypes = {
    id: PropTypes.string,
    persistSelectedItem: PropTypes.bool,
    storage: PropTypes.object
  };

  constructor(props, context, updater) {
    const {selected, ...properties} = props;
    super(properties, context, updater);
    this.state = {
      selected: selected,
      parentRequestedTheme: context.requestedTheme
    };
  }

  get splitView() {
    return this.context.parent;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selected: nextProps.selected});
    if (this.refs.content) {
      this.refs.content.setState({selected: nextProps.selected});
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.refs.content) {
      this.refs.content.setState({parentRequestedTheme: nextState.parentRequestedTheme});
    }
  }

  render() {
    const { children, style, ...props } = this.props;
    this.splitView;

    let componentStyle = {...styles.content};

    return this.state.selected ? (
      <div
        style={componentStyle}
      >
        <Content
          ref="content"
          selected={this.state.selected}
          parentRequestedTheme={this.state.parentRequestedTheme}
          style={style}
          {...props}
        >
          {children}
        </Content>
      </div>
    ) : null;
  }
}

export default Item;
