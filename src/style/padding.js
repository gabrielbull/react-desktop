import { PropTypes } from 'react';
import styleHelper, { extractProps, parseDimension } from '../styleHelper';

export const paddingPropTypes = {
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export function removePaddingProps(props) {
  return extractProps(props, paddingPropTypes)[0];
}

function mapPaddingStyle(key, value) {
  return [key, parseDimension(value)];
}

export default function(...options) {
  return styleHelper(options, paddingPropTypes, mapPaddingStyle);
}
