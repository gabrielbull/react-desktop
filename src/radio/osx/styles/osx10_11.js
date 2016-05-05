export default {
  radio: {
    userSelect: 'none',
    WebkitAppearance: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#b8b8b8',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    padding: '7px',
    verticalAlign: 'bottom',
    marginRight: '3px',
    boxShadow: 'inset 0 1px 0 0 rgba(224, 224, 224, .4)',
    transition: 'all 0.4s',

    ':focus': {
      outline: 'none'
    }
  },

  'radio:active': {
    borderColor: '#a4a4a4',
    backgroundColor: '#f0f0f0',
    boxShadow: 'inset 0 0 0 1px rgba(117, 117, 117, .35)',
    transition: 'all 0.4s'
  },

  'radio:checked': {
    backgroundColor: '#3b99fc',
    boxShadow: 'none',
    borderColor: '#2c91fc',
    transition: 'all 0s'
  },

  'radio:checked:active': {
    backgroundColor: '#0080f6',
    borderColor: '#006adc',
    boxShadow: 'inset 0 0 0 1px rgba(19, 68, 119, .22)',
    transition: 'all 0.4s'
  },

  label: {
    display: 'block',
    height: '20px',
    lineHeight: '22px',
    position: 'relative',

    ':hover': {},
    ':active': {}
  },

  checkmark: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    width: '6px',
    height: '6px'
  },

  svg: {
    zIndex: '2',
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '6px'
  },

  svgShadow: {
    zIndex: '1',
    position: 'absolute',
    top: '1.5px',
    left: '0px',
    opacity: '.37',
    height: '6px',
    filter: 'blur(.5px)'
  }
};
