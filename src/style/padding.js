import React, { Component, PropTypes, cloneElement, isValidElement } from 'react';
import { parseDimension, extractProps, hasProps, mapStyle } from '../propsUtils';

export const paddingPropTypes = {
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export function removePaddingProps(props) {
  return extractProps(props, paddingPropTypes)[0];
}

function Padding([element, elementProps] = null, ComposedComponent = null) {
  if (element) {
    if (hasProps(elementProps, paddingPropTypes)) {
      const props = mapStyle(element.props, extractProps(elementProps, paddingPropTypes)[1], parseDimension);
      return cloneElement(element, props);
    }
    return element;
  } else {
    return class extends Component {
      render() {
        if (hasProps(this.props, paddingPropTypes)) {
          const props = mapStyle(...extractProps(this.props, paddingPropTypes), parseDimension);
          return <ComposedComponent {...props}/>;
        }
        return <ComposedComponent {...this.props}/>
      }
    }
  }
}

export default function(...options) {
  if (options[0] && isValidElement(options[0])) {
    return Padding([...options]);
  }
  return Padding.bind(null, options);
}
