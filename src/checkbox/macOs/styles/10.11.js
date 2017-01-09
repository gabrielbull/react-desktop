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
    paddingTop: '1px'
  },

  checkbox: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppearance: 'none',
    appearance: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#b8b8b8',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    padding: '6px',
    margin: '0 1px',
    boxShadow: 'inset 0 1px 0 0 rgba(224, 224, 224, .4)',
    transition: 'all 0.4s',

    ':focus': {
      outline: 'none'
    }
  },

  'checkbox:active': {
    borderColor: '#a4a4a4',
    backgroundColor: '#f0f0f0',
    boxShadow: 'inset 0 0 0 1px rgba(117, 117, 117, .35)',
    transition: 'all 0.4s'
  },

  'checkbox:checked': {
    backgroundColor: '#3b99fc',
    boxShadow: 'none',
    borderColor: '#2c91fc',
    transition: 'all 0.4s'
  },

  'checkbox:checked:unfocused': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    borderColor: '#b8b8b8',
    transition: 'none'
  },

  'checkbox:checked:active': {
    backgroundColor: '#0080f6',
    borderColor: '#006adc',
    boxShadow: 'inset 0 0 0 1px rgba(19, 68, 119, .22)',
    transition: 'all 0.4s'
  },

  checkmark: {
    position: 'absolute',
    top: '4px',
    left: '4px',
    width: '8px',
    height: '8px'
  },

  svg: {
    zIndex: '2',
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '8px'
  },

  svgShadow: {
    zIndex: '1',
    position: 'absolute',
    top: '1.5px',
    left: '0px',
    opacity: '.37',
    height: '8px',
    filter: 'blur(.5px)'
  }
};
