import { PropTypes } from 'react';
import styleHelper, { extractProps, parseDimension } from '../styleHelper';

export const fontSizePropTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export function removeFontSizeProps(props) {
  return extractProps(props, fontSizePropTypes)[0];
}

function mapFontSizeStyle(key, value) {
  return [
    ['fontSize', parseDimension(value)],
    ['lineHeight', parseDimension(parseInt(value) * 1.2)]
  ];
}

export default function(...options) {
  return styleHelper(options, fontSizePropTypes, mapFontSizeStyle);
}
