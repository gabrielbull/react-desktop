import PropTypes from 'prop-types';
import styleHelper, { extractProps, parseDimension } from '../styleHelper';

export const widthPropTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export function removeWidthProps(props) {
  return extractProps(props, widthPropTypes)[0];
}

function mapWidthStyle(key, value) {
  return [key, parseDimension(value)];
}

function mapWidthStyles(styles) {
  if (styles.width) {
    if (styles.flex) {
      delete styles.flex;
    } else if (styles.flexGrow) {
      delete styles.flexGrow;
    }
  }
  return styles;
}

export default function(...options) {
  return styleHelper(options, widthPropTypes, mapWidthStyle, mapWidthStyles);
}
