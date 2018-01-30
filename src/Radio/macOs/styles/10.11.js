export default {
  container: {
    display: 'flex'
  },

  label: {
    display: 'flex',
    height: '20px',
    position: 'relative',

    ':hover': {},
    ':active': {}
  },

  inputWrapper: {
    position: 'relative',
    marginRight: '3px',
    paddingTop: '2px'
  },

  radio: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppearance: 'none',
    appearance: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#b8b8b8',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    padding: '7px',
    margin: '0px',
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

  'radio:checked:unfocused': {
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    borderColor: '#b8b8b8',
    transition: 'none'
  },

  'radio:checked:active': {
    backgroundColor: '#0080f6',
    borderColor: '#006adc',
    boxShadow: 'inset 0 0 0 1px rgba(19, 68, 119, .22)',
    transition: 'all 0.4s'
  },

  checkmark: {
    position: 'absolute',
    top: '7px',
    left: '5px',
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
