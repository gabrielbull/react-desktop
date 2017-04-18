import PropTypes from 'prop-types';
import styleHelper, { extractProps } from '../styleHelper';

const allowedValues = ['left', 'right', 'center'];

export const textAlignPropTypes = {
  textAlign: PropTypes.string
};

export function removeTextAlignProps(props) {
  return extractProps(props, textAlignPropTypes)[0];
}

function mapTextAlignStyle(key, value) {
  let finalKey, finalValue;
  if (allowedValues.indexOf(value) === -1) {
    console.error('Unknown value for ' + key + ': ' + value);
  } else {
    finalKey = 'textAlign';
    finalValue = value;
  }
  return [finalKey, finalValue];
}

export default function(...options) {
  return styleHelper(options, textAlignPropTypes, mapTextAlignStyle);
}
