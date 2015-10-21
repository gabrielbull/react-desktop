export function darkenColor(color, percent) {
  return color;
}

export function ligthenColor(color, percent) {
  return color;
}

export function convertColor(color) {
  switch (color) {
  case 'white':
    return '#ffffff';
  case 'blue':
    return '#1883d7';
  }
  return color;
}

export function isDarkColor(color) {
  const c = convertColor(color).substring(1);      // strip #
  const rgb = parseInt(c, 16);   // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff;  // extract red
  const g = (rgb >>  8) & 0xff;  // extract green
  const b = (rgb >>  0) & 0xff;  // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma < 40;
}
