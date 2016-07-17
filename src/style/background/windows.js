import { PropTypes } from 'react';
import styleHelper, { extractProps } from '../../styleHelper';

export const backgroundPropTypes = {
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export const backgroundContextTypes = {
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export function removeBackgroundProps(props) {
  return extractProps(props, backgroundPropTypes)[0];
}

export default function(...options) {
  return styleHelper(options, backgroundPropTypes);
}
