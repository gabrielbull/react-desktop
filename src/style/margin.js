import PropTypes from 'prop-types';
import styleHelper, { extractProps, parseDimension } from '../styleHelper';

export const marginPropTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export function removeMarginProps(props) {
  return extractProps(props, marginPropTypes)[0];
}

function mapMarginStyle(key, value) {
  return [key, parseDimension(value)];
}

export default function(...options) {
  return styleHelper(options, marginPropTypes, mapMarginStyle);
}
