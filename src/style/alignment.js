import PropTypes from 'prop-types';
import styleHelper, { extractProps } from '../styleHelper';

const allowedValues = ['left', 'right', 'center'];

export const alignmentPropTypes = {
  horizontalAlignment: PropTypes.string,
  verticalAlignment: PropTypes.string
};

export function removeAlignmentProps(props) {
  return extractProps(props, alignmentPropTypes)[0];
}

function mapAlignmentStyle(key, value, props) {
  let finalKey, finalValue;
  if (allowedValues.indexOf(value) === -1) {
    console.error('Unknown value for ' + key + ': ' + value);
  } else {
    let layout = 'horizontal';
    if (props !== undefined && typeof props.layout !== 'undefined') {
      layout = props.layout;
    }
    if (key === 'horizontalAlignment' && layout === 'horizontal' || key === 'verticalAlignment' && layout === 'vertical') {
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
    } else if (key === 'verticalAlignment' && layout === 'horizontal' || key === 'horizontalAlignment' && layout === 'vertical') {
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
  }
  return [finalKey, finalValue];
}

export default function(...options) {
  return styleHelper(options, alignmentPropTypes, mapAlignmentStyle);
}
