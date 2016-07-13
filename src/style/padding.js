import { PropTypes } from 'react';
import { extractProps, styleHelper } from '../propsUtils';

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

export default function(...options) {
  return styleHelper(options, paddingPropTypes);
}
