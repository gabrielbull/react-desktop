export default {
  container: {
    display: 'flex',
    marginBottom: '22px'
  },

  label: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    ':hover': {},
    ':active': {}
  },

  text: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    marginTop: '1px',
    color: '#000000'
  },

  textDark: {
    color: '#ffffff'
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
    outline: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, .8)',
    padding: '8px',
    color: '#fff',
    verticalAlign: 'bottom',
    marginRight: '6px',

    ':focus': {
      outline: 'none'
    }
  },

  checkboxDark: {
    borderColor: 'rgba(255, 255, 255, .82)',
  },

  'checkbox:active': {
    borderColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(0, 0, 0, .57)'
  },

  'checkbox:hover': {
    borderColor: 'rgba(0, 0, 0, 1)'
  },

  'checkbox:checked': {
    backgroundColor: '#007CD1',
    borderColor: '#007CD1'
  },

  'checkboxDark:active': {
    borderColor: 'rgba(255, 255, 255, 0)',
    backgroundColor: 'rgba(255, 255, 255, .63)'
  },

  'checkboxDark:hover': {
    borderColor: 'rgba(255, 255, 255, 1)'
  },

  'checkboxDark:checked': {
    backgroundColor: '#007CD1',
    borderColor: '#007CD1'
  },

  svg: {
    position: 'absolute',
    top: '6px',
    left: '5px',
    color: '#fff',
    height: '16px'
  }
};
