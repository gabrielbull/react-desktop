import PropTypes from 'prop-types';
import styleHelper, { extractProps, parseDimension } from '../styleHelper';

export const dimensionPropTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export function removeDimensionProps(props) {
  return extractProps(props, dimensionPropTypes)[0];
}

function mapDimensionStyle(key, value) {
  return [key, parseDimension(value)];
}

export default function(...options) {
  return styleHelper(options, dimensionPropTypes, mapDimensionStyle);
}
