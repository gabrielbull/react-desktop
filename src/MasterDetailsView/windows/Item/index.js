import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../Master';
import Details from '../Details';
import { ColorContext, colorPropTypes } from '../../../style/color/windows';
import { ThemeContext, themePropTypes } from '../../../style/theme/windows';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

let warnOnceMaster = false;
let warnOnceDetails = false;
function applyChildenClasses() {
  return function(ComposedComponent) {
    const nextMaster = Master;
    ComposedComponent.prototype.Master = ComposedComponent.Master = function(
      ...args
    ) {
      if (!warnOnceMaster) {
        warnOnceMaster = true;
        console.warn(
          'React Desktop: Using MasterDetailsView.Item.Master is deprecated, import MasterDetailsViewItemMaster instead.'
        );
      }
      return new nextMaster(...args);
    };
    const nextDetails = Details;
    ComposedComponent.prototype.Details = ComposedComponent.Details = function(
      ...args
    ) {
      if (!warnOnceDetails) {
        warnOnceDetails = true;
        console.warn(
          'React Desktop: Using MasterDetailsView.Item.Details is deprecated, import MasterDetailsViewItemDetails instead.'
        );
      }
      return new nextDetails(...args);
    };
    return ComposedComponent;
  };
}

@applyChildenClasses()
@ColorContext()
@ThemeContext()
class Item extends Component {
  static propTypes = {
    ...colorPropTypes,
    ...themePropTypes,
    selected: PropTypes.bool
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      selected: props.selected ? props.selected : false
    };
  }

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div style={{ ...styles, ...style }} {...props}>
        {children}
      </div>
    );
  }
}

export default Item;
