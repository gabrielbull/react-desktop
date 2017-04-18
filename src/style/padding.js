import PropTypes from 'prop-types';
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

export function removeDuplicatePaddingProps(styles, props) {
  if (props !== undefined && typeof props.style !== 'undefined') {
    styles = { ...styles };
    if (props.style.padding) {
      delete styles.paddingBottom;
      delete styles.paddingLeft;
      delete styles.paddingRight;
      delete styles.paddingTop;
      return styles;
    } else if (props.style.paddingBottom || props.style.paddingLeft || props.style.paddingRight || props.style.paddingTop) {
      delete styles.padding;
      return styles;
    }
  }
  return styles;
}

function mapPaddingStyle(key, value) {
  return [key, parseDimension(value)];
}

export default function(...options) {
  return styleHelper(options, paddingPropTypes, mapPaddingStyle);
}
