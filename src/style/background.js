import { PropTypes } from 'react';
import { styleHelper, extractProps } from '../propsUtils';

export const macOsBackgroundPropTypes = {
  background: PropTypes.string
};
export const windowsBackgroundPropTypes = {
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export function removeBackgroundProps(props) {
  return extractProps(props, macOsBackgroundPropTypes)[0];
}

export default function(...options) {
  return styleHelper(options, macOsBackgroundPropTypes);
}
