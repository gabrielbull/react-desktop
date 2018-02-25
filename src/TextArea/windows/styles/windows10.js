export default {
  textBox: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(148, 148, 148, 1)',
    padding: '2px 10px 3px 10px',
    lineHeight: '23px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    fontWeight: '100',
    color: '#000000',
    marginBottom: '-4px',
    background: 'rgba(255, 255, 255, .35)',

    ':hover': {
      borderColor: 'rgba(100, 100, 100, 1)',
      background: 'rgba(255, 255, 255, .5)'
    },

    ':focus': {
      outline: 'none',
      borderColor: 'rgba(0, 120, 215, 1)',
      background: 'rgba(255, 255, 255, 1)'
    }
  },

  textBoxDarkTheme: {
    borderColor: 'rgba(255, 255, 255, .41)',
    background: 'rgba(0, 0, 0, .4)',
    color: '#ffffff',

    ':hover': {
      borderColor: 'rgba(255, 255, 255, .94)',
      background: 'rgba(0, 0, 0, .6)'
    },

    ':focus': {
      outline: 'none',
      borderColor: 'rgba(0, 120, 215, 1)',
      background: 'rgba(255, 255, 255, 1)',
      color: '#000000'
    }
  },

  ':placeholder': {
    color: '#636363'
  },

  ':placeholderDarkTheme': {
    color: 'rgba(255, 255, 255, .64)',

    ':focus': {
      color: 'rgba(0, 0, 0, .41)'
    }
  },

  labalDarkTheme: {

  }
};
