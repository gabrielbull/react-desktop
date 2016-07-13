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
