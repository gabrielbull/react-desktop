import PropTypes from 'prop-types';
import styleHelper, { extractProps } from '../styleHelper';

export const hiddenPropTypes = {
  hidden: PropTypes.bool
};

export function removeHiddenProps(props) {
  return extractProps(props, hiddenPropTypes)[0];
}

function mapHiddenStyle(key, value) {
  return value ? ['display', 'none'] : null;
}

export default function(...options) {
  return styleHelper(options, hiddenPropTypes, mapHiddenStyle);
}
