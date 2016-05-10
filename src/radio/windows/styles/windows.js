export default {
  container: {
    display: 'flex',
    marginBottom: '21px'
  },

  label: {
    display: 'flex',
    position: 'relative',
    ':hover': {},
    ':active': {}
  },

  text: {
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    color: '#000000',
    display: 'inline'
  },

  inputWrapper: {
    position: 'relative',
    marginRight: '7px',
    paddingTop: '2px'
  },

  radio: {
    userSelect: 'none',
    WebkitAppearance: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#333333',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    padding: '8px',
    margin: '0px',

    ':focus': {
      outline: 'none'
    }
  },

  'radio:hover': {
    borderColor: '#000000'
  },

  'radio:active': {
    borderColor: '#666666'
  },

  'radio:checked:active': {
    borderColor: '#666666'
  },

  circle: {
    position: 'absolute',
    top: '7px',
    left: '5px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#333333'
  },

  'circle:hover': {
    background: '#000000'
  },

  'circle:active': {
    background: '#666666'
  }
};
