import React, { Component, Children, cloneElement, PropTypes } from 'react';
import DesktopComponent from '../../DesktopComponent';
import Master from './Master/Master.windows';
import Details from './Details/Details.windows';
import Pane from './Pane.windows';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class MasterDetails extends Component {
  masters = [];
  details = [];

  static childContextTypes = {
    id: PropTypes.string,
    masterWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    detailsWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    push: PropTypes.bool,
    masterDetails: PropTypes.object
  };

  constructor(props, context, updater) {
    console.log(context);
    super(props, context, updater);
    this.state = {
      selected: 0
    };
    this.filterChildren(props.children);
  }

  getChildContext() {
    return {
      id: this.context.id,
      masterWidth: this.context.masterWidth,
      detailsWidth: this.context.detailsWidth,
      push: this.context.push,
      masterDetails: this
    };
  }

  select(index) {
    console.log(index);
    this.setState({ selected: index });
    for (var prop in this.refs) {
      if (this.refs.hasOwnProperty(prop) && prop.indexOf('master') === 0) {
        this.refs[prop].setState({ selected: prop === 'master' + index });
      }
    }
  }

  filterChildren(children) {
    Children.map(children, (item, key) => {
      Children.map(item.props.children, (child) => {
        if (child.type === Master) {
          this.masters = [
            ...this.masters,
            cloneElement(child, { key: key, ref: 'master' + key, index: key })
          ];
        } else if (child.type === Details) {
          this.details = [
            ...this.details,
            cloneElement(child, { key: key, ref: 'details' + key, index: key })
          ];
        }
      });
    });
  }

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        <Pane>
          {this.renderMasters()}
        </Pane>
        {this.renderDetail()}
      </div>
    );
  }

  renderMasters() {
    let children = [];
    this.masters.forEach(
      (item, index) => {
        children.push(index === this.state.selected ? cloneElement(item, { selected: true }) : item)
      }
    );
    return children;
  }

  renderDetail() {
    let children = null;
    this.details.forEach(
      (item, index) => {
        if (index === this.state.selected) children = item;
      }
    );
    return children;
  }
}

export default MasterDetails;
