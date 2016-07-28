import React, { Component, cloneElement, isValidElement } from 'react';

export function parseDimension(value) {
  if (typeof value === 'number') {
    return value + 'px';
  } else if (value.match(/^[0-9]+$/)) {
    return value + 'px';
  }
  return value;
}

export function applyDefaultProps(props, context, defaultProps) {
  let finalProps = { ...props };

  for (let prop in defaultProps) {
    if (defaultProps.hasOwnProperty(prop)) {
      if (!props[prop]) {
        if (context[prop]) {
          finalProps[prop] = context[prop];
        } else {
          finalProps[prop] = defaultProps[prop];
        }
      } else if (props[prop] && typeof props[prop] === 'boolean' && typeof defaultProps[prop] !== 'boolean') {
        if (context.color) {
          finalProps[prop] = context[prop];
        } else {
          finalProps[prop] = defaultProps[prop];
        }
      }
    }
  }

  return finalProps;
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

export function mapStyle(prevStyles, nextStyles, defaultStyles, styleCallback, stylesCallback, props) {
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
        const result = styleCallback(key, nextStyles[key], props);
        if (result) {
          finalStyles[result[0]] = result[1];
        }
      } else finalStyles[key] = nextStyles[key];
    }
  }

  if (typeof stylesCallback === 'function') return stylesCallback(finalStyles, props);
  return finalStyles;
}

export default function styleHelper(options, propTypes, mapStyleCallback, mapStylesCallback, mapProps) {
  if (!mapProps || typeof mapProps !== 'function') {
    mapProps = props => props;
  }

  function doStyleHelper(WrappedComponent) {
    const [element, elementProps, defaultStyles] = options;
    if (isValidElement(element)) {
      if (hasProps(elementProps, propTypes) || hasProps(defaultStyles, propTypes)) {
        const styles = extractProps(elementProps, propTypes)[1];
        const props = element.props ? { ...element.props } : {};
        props.style = mapStyle(props.style, styles, defaultStyles, mapStyleCallback, mapStylesCallback, elementProps);
        return cloneElement(element, mapProps(props, element.props, true));
      }
      return cloneElement(element, mapProps(element.props, element.props, false));
    } else {
      let defaultStyles;
      if (options && Object.prototype.toString.call(options) === '[object Array]') {
        defaultStyles = options[0];
      }
      return class extends Component {
        render() {
          if (hasProps(this.props, propTypes) || hasProps(defaultStyles, propTypes)) {
            let [props, styles] = extractProps(this.props, propTypes);
            if (!props) props = {};
            props.style = mapStyle(props.style, styles, defaultStyles, mapStyleCallback, mapStylesCallback, this.props);
            return <WrappedComponent {...mapProps(props, this.props, true)}/>;
          }
          return <WrappedComponent {...mapProps(this.props, this.props, false)}/>
        }
      }
    }
  }

  if (options[0] && isValidElement(options[0])) {
    return doStyleHelper();
  }

  return doStyleHelper;
}
