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

export function mapStyle(prevStyles, nextStyles, defaultStyles, styleCallback, styleCallbacks) {
  let finalStyles = { ...prevStyles };
  if (defaultStyles) {
    for (let key in defaultStyles) {
      if (defaultStyles.hasOwnProperty(key)) {
        finalStyles[key] = defaultStyles[key];
      }
    }
  }

  for (let key in nextStyles) {
    if (nextStyles.hasOwnProperty(key)) {
      if (styleCallback) {
        const result = styleCallback(key, nextStyles[key]);
        if (result) {
          finalStyles[result[0]] = result[1];
        }
      } else finalStyles[key] = nextStyles[key];
    }
  }

  if (typeof styleCallbacks === 'function') return styleCallbacks(finalStyles);
  return finalStyles;
}

export default function styleHelper(options, propTypes, mapStyleCallback, mapStyleCallbacks) {
  function doStyleHelper(WrappedComponent) {
    const [element, elementProps, defaultStyles] = options;
    if (isValidElement(element)) {
      if (hasProps(elementProps, propTypes)) {
        const styles = extractProps(elementProps, propTypes)[1];
        const props = element.props ? { ...element.props } : {};
        props.style = mapStyle(props.style, styles, defaultStyles, mapStyleCallback, mapStyleCallbacks);
        return cloneElement(element, props);
      }
      return element;
    } else {
      let defaultStyles;
      if (options && Object.prototype.toString.call(options) === '[object Array]') {
        defaultStyles = options[0];
      }
      return class extends Component {
        render() {
          if (hasProps(this.props, propTypes)) {
            let [props, styles] = extractProps(this.props, propTypes);
            if (!props) props = {};
            props.style = mapStyle(props.style, styles, defaultStyles, mapStyleCallback, mapStyleCallbacks);
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
