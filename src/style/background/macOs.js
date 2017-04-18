import PropTypes from 'prop-types';
import styleHelper, { extractProps } from '../../styleHelper';

export const backgroundPropTypes = {
  background: PropTypes.string
};

export function removeBackgroundProps(props) {
  return extractProps(props, backgroundPropTypes)[0];
}

export default function(...options) {
  return styleHelper(options, backgroundPropTypes);
}
