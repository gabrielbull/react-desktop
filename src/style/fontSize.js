import PropTypes from 'prop-types';
import styleHelper, { extractProps, parseDimension } from '../styleHelper';

export const fontSizePropTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export function removeFontSizeProps(props) {
  return extractProps(props, fontSizePropTypes)[0];
}

function mapFontSizeStyle(key, value) {
  return ['fontSize', parseDimension(value)];
}

function mapFontSizeStyles(styles) {
  if (styles.fontSize && !styles.lineHeight) {
    styles.lineHeight = parseDimension(parseInt(styles.fontSize) * 1.2);
  }
  return styles;
}

export default function(...options) {
  return styleHelper(options, fontSizePropTypes, mapFontSizeStyle, mapFontSizeStyles);
}
