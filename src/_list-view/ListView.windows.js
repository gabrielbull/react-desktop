import React, { Component, PropTypes, Children } from 'react';
import DesktopComponent from '../../desktop-component';
import Item from './Item/Item.windows';
import Master from './MasterDetails/Master/Master.windows';
import MasterDetails from './MasterDetails/MasterDetails.windows';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class ListView extends Component {
  static Item = Item;

  static propTypes = {
    id: PropTypes.string,
    masterWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    detailsWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    push: PropTypes.bool
  };

  static defaultProps = {
    push: true
  };

  static childContextTypes = {
    id: PropTypes.string,
    masterWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    detailsWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    push: PropTypes.bool
  };

  getChildContext() {
    return {
      id: this.id,
      masterWidth: this.props.masterWidth,
      detailsWidth: this.props.detailsWidth,
      push: typeof this.props.push === 'undefined' ? this.defaultProps.push : this.props.push
    };
  }

  constructor(props, context, updater) {
    let { id, ...properties } = props;
    super(properties, context, updater);
    this.id = id || 'listview';
  }

  isMasterDetails() {
    let isMasterDetails = false;
    Children.map(this.props.children, (child) => {
      Children.map(child.props.children, (child) => {
        isMasterDetails = isMasterDetails || child.type === Master;
      });
    });
    return isMasterDetails;
  }

  render() {
    const { children, style, ...props } = this.props;

    if (this._masterChildrenItem || this.isMasterDetails()) {
      return this._masterChildrenItem = this._masterChildrenItem || <MasterDetails {...this.props}/>;
    }

    // todo standard list view
    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default ListView;
