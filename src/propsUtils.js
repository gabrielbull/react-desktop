import React, { Component, cloneElement, isValidElement } from 'react';

export function parseDimension(value) {
  if (typeof value === 'number') {
    return value + 'px';
  } else if (value.match(/^[0-9]+$/)) {
    return value + 'px';
  }
  return value;
}

export function hasProps(props, proptypes) {
  if (!proptypes) return false;

  for (let prop in props) {
    if (props.hasOwnProperty(prop)) {
      if (proptypes[prop] !== undefined) {
        return true;
      }
    }
  }
  return false;
}

export function extractProps(props, proptypes) {
  if (!proptypes) return [{},  {}];

  let finalProps = {};
  let extractedProps = {};
  for (let prop in props) {
    if (props.hasOwnProperty(prop)) {
      if (proptypes[prop] !== undefined) {
        extractedProps[prop] = props[prop];
      } else {
        finalProps[prop] = props[prop];
      }
    }
  }
  return [finalProps, extractedProps];
}

export function mapStyle(props, styles, callback) {
  if (!props.style) props.style = {};
  for (let key in styles) {
    if (styles.hasOwnProperty(key)) {
      if (callback) props.style[key] = callback(styles[key]);
      else props.style[key] = styles[key];
    }
  }
  return props;
}

export function styleHelper(component, elementProps, propTypes, callback) {
  function doStyleHelper() {
    if (isValidElement(component)) {
      if (hasProps(elementProps, propTypes)) {
        const props = mapStyle(component.props, extractProps(elementProps, propTypes)[1], callback);
        return cloneElement(component, props);
      }
      return component;
    } else {
      const ComposedComponent = component;
      return class extends Component {
        render() {
          if (hasProps(this.props, propTypes)) {
            const props = mapStyle(...extractProps(this.props, propTypes, callback));
            return <ComposedComponent {...props}/>;
          }
          return <ComposedComponent {...this.props}/>
        }
      }
    }
  }

  return isValidElement(component) ? doStyleHelper() : doStyleHelper;
}
