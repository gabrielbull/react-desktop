export default {
  container: {
    position: 'relative',
    zIndex: '2'
  },

  containerFocus: {
    zIndex: '3'
  },

  wrapper: {
    position: 'relative'
  },

  textField: {
    position: 'relative',
    zIndex: '2',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#bebfbf',
    boxShadow: 'inset 0 0 0 1px #f0f0f0',
    paddingTop: '4px',
    paddingBottom: '3px',
    paddingLeft: '3.5px',
    paddingRight: '3.5px',
    lineHeight: '15px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    fontSize: '13px',
    letterSpacing: '0.4px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',

    ':placeholder': {
      color: '#c0c0c0'
    }
  },

  textFieldFocus: {
    borderColor: '#64abda',
    transition: 'border-color .22s ease-out'
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
    borderRadius: '4px'
  }
};
