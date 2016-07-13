import { PropTypes } from 'react';
import styleHelper, { extractProps } from '../styleHelper';

const allowedValues = ['left', 'right', 'center'];

export const alignmentPropTypes = {
  horizontalAlignment: PropTypes.string,
  verticalAlignment: PropTypes.string
};

export function removeAlignmentProps(props) {
  return extractProps(props, alignmentPropTypes)[0];
}

function mapAlignmentStyle(key, value) {
  let finalKey, finalValue;
  if (allowedValues.indexOf(value) === -1) {
    console.error('Unknown value for ' + key + ': ' + value);
  } else if (key === 'horizontalAlignment') {
    finalKey = 'justifyContent';
    switch (value) {
    case 'center':
      finalValue = 'center';
      break;
    case 'left':
      finalValue = 'flex-start';
      break;
    case 'right':
      finalValue = 'flex-end';
      break;
    }
  } else if (key === 'verticalAlignment') {
    finalKey = 'alignItems';
    switch (value) {
    case 'center':
      finalValue = 'center';
      break;
    case 'left':
      finalValue = 'flex-start';
      break;
    case 'right':
      finalValue = 'flex-end';
      break;
    }
  }
  return [finalKey, finalValue];
}

export default function(...options) {
  return styleHelper(options, alignmentPropTypes, mapAlignmentStyle);
}
