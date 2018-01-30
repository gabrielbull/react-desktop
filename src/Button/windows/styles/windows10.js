export default {
  button: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    backgroundColor: '#cccccc',
    outline: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#cccccc',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '32px',
    paddingRight: '32px',
    lineHeight: '28px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    color: '#000000',

    ':hover': {
      color: '#000000',
      borderColor: '#7a7a7a'
    },

    ':active': {
      color: '#000000',
      borderColor: '#999999',
      backgroundColor: '#999999'
    }
  },

  colorButton: {
    color: '#ffffff',
    borderColor: '#0078d7',
    backgroundColor: '#0078d7',

    ':hover': {
      borderColor: '#004e8c'
    },

    ':active': {
      borderColor: '#004e8c',
      backgroundColor: '#004e8c'
    }
  },

  pushTransform: {
    transform: 'scale(0.97)',
    transition: 'transform .1s ease-in'
  }
};
