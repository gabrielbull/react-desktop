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

export function styleHelper(options, propTypes, callback) {
  function doStyleHelper(WrappedComponent) {
    const [element, elementProps] = options;
    if (isValidElement(element)) {
      if (hasProps(elementProps, propTypes)) {
        const props = mapStyle(element.props, extractProps(elementProps, propTypes)[1], callback);
        return cloneElement(element, props);
      }
      return element;
    } else {
      return class extends Component {
        render() {
          if (hasProps(this.props, propTypes)) {
            const props = mapStyle(...extractProps(this.props, propTypes, callback));
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
