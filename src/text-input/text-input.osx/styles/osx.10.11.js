export default {
  container: {
    position: 'relative'
  },

  textField: {
    position: 'relative',
    zIndex: '2',
    WebkitUserSelect: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#bebfbf',
    boxShadow: 'inset 0 0 0 1px #f0f0f0',
    paddingTop: '4px',
    paddingBottom: '1px',
    paddingLeft: '3.5px',
    paddingRight: '3.5px',
    lineHeight: '15px',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
    fontSize: '13px',
    fontWeight: '300',
    letterSpacing: '0.4px',

    ':focus': {
      outline: 'none',
      borderColor: '#64abda',
      transition: 'border-color .22s ease-out'
      //boxShadow: '0 0 0 3.5px #93c2f3'
    },

    ':placeholder': {
      color: '#c0c0c0'
    }
  },

  focusElement: {
    position: 'absolute',
    zIndex: '1',
    width: '100%',
    height: '100%',
    top: '-3px',
    left: '-3px',
    background: '#7dc3f2',
    border: '3px solid #7dc3f2',
    opacity: '0',
    borderRadius: '4px',
    transform: 'scale(1, 1)'
  }
};
