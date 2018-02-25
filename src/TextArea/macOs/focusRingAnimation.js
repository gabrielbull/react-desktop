import { keyframes } from 'radium';

export default function (borderRadius) {
  return keyframes(
    {
      '0%': {
        opacity: '0',
        borderWidth: '34px',
        top: '-34px',
        left: '-34px'
      },
      '32%': {
        opacity: '0',
        borderRadius: '10px',
        borderWidth: '30px',
        top: '-30px',
        left: '-30px'
      },
      '50%': {
        opacity: '.2',
        borderWidth: '15px',
        top: '-15px',
        left: '-15px'
      },
      '80%': {
        opacity: '.4',
        borderWidth: '9px',
        top: '-9px',
        left: '-9px'
      },
      '90%': {
        opacity: '.9',
        borderWidth: '6px',
        top: '-6px',
        left: '-6px'
      },
      '100%': {
        opacity: '1',
        ...(
          borderRadius ? {
            top: '-2px',
            left: '-2px',
            borderRadius: (parseInt(borderRadius) + 2) + 'px',
            borderWidth: '2px',
            boxShadow: '0 0 1px 0px rgba(125, 195, 242, .7)'
          } : {
            top: '-3px',
            left: '-3px',
            borderRadius: '4px',
            borderWidth: '3px'
          }
        )
      }
    },
    'text-input-focus'
  );
}
