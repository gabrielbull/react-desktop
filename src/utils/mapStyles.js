export default function mapStyles(styles, map) {
  let popped = [];
  let mappedStyles = {};
  for (let prop in map) {
    if (map.hasOwnProperty(prop)) {
      mappedStyles[prop] = {};
      map[prop].forEach(key => {
        if (styles !== undefined && typeof styles[key] !== 'undefined') {
          popped.push(key);
          mappedStyles[prop][key] = styles[key];
        }
      })
    }
  }
  let remaining = {};
  for (let prop in styles) {
    if (styles.hasOwnProperty(prop)) {
      if (popped.indexOf(prop) === -1) {
        remaining[prop] = styles[prop];
      }
    }
  }

  let finalStyles = [remaining];
  for (let prop in mappedStyles) {
    if (mappedStyles.hasOwnProperty(prop)) {
      finalStyles.push(mappedStyles[prop]);
    }
  }

  return finalStyles;
}
