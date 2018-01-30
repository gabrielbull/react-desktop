export default {
  button: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ffffff',
    outline: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    borderTopColor: '#c8c8c8',
    borderBottomColor: '#acacac',
    borderLeftColor: '#c2c2c2',
    borderRightColor: '#c2c2c2',
    boxShadow: '0 1px rgba(0, 0, 0, .039)',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '13px',
    paddingRight: '13px',
    lineHeight: '19px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    fontSize: '13px',

    ':active': {
      backgroundImage: '-webkit-linear-gradient(top, #4c98fe 0%, #0564e3 100%)',
      borderTopColor: '#247fff',
      borderBottomColor: '#003ddb',
      borderLeftColor: '#125eed',
      borderRightColor: '#125eed',
      color: 'rgba(255, 255, 255, .9  )'
    }
  },

  blue: {
    backgroundImage: '-webkit-linear-gradient(top, #6cb3fa 0%, #087eff 100%)',
    borderTopColor: '#4ca2f9',
    borderBottomColor: '#015cff',
    borderLeftColor: '#267ffc',
    borderRightColor: '#267ffc',
    color: 'rgba(255, 255, 255, .9)',

    ':active': {
      backgroundImage: '-webkit-linear-gradient(top, #4c98fe 0%, #0564e3 100%)',
      borderTopColor: '#247fff',
      borderBottomColor: '#003ddb',
      borderLeftColor: '#125eed',
      borderRightColor: '#125eed',
      color: 'rgba(255, 255, 255, .9  )'
    }
  }
};
