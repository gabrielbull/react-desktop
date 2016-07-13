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

export function mapStyle(defaultStyles, styles, callback) {
  if (!defaultStyles) defaultStyles = {};
  for (let key in styles) {
    if (styles.hasOwnProperty(key)) {
      if (callback) {
        const [finalKey, finalValue] = callback(key, styles[key]);
        defaultStyles[finalKey] = finalValue;
      } else defaultStyles[key] = styles[key];
    }
  }
  return defaultStyles;
}

export default function styleHelper(options, propTypes, callback) {
  function doStyleHelper(WrappedComponent) {
    const [element, elementProps] = options;
    if (isValidElement(element)) {
      if (hasProps(elementProps, propTypes)) {
        const styles = extractProps(elementProps, propTypes)[1];
        const props = element.props ? { ...element.props } : {};
        props.style = mapStyle(props.style, styles, callback);
        return cloneElement(element, props);
      }
      return element;
    } else {
      return class extends Component {
        render() {
          if (hasProps(this.props, propTypes)) {
            let [props, styles] = extractProps(this.props, propTypes);
            if (!props) props = {};
            props.style = mapStyle(props.style, styles, callback);
            return <WrappedComponent {...props}/>;
          }
          return <WrappedComponent {...this.props}/>
        }
      }
    }
  }

  if (options[0] && isValidElement(options[0])) {
    return doStyleHelper();
  }

  return doStyleHelper;
}
