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
    borderTopColor: '#bebfbf',
    borderLeftColor: '#bebfbf',
    borderRightColor: '#bebfbf',
    borderBottomColor: '#bebfbf',
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
    borderTopColor: '#64abda',
    borderLeftColor: '#64abda',
    borderRightColor: '#64abda',
    borderBottomColor: '#64abda',
    transition: 'border-color .22s ease-out'
  },

  textFieldRoundedFocus: {
    borderTopColor: '#64abda',
    borderLeftColor: '#64abda',
    borderRightColor: '#64abda',
    borderBottomColor: '#64abda',
    boxShadow: 'inset 0 0 0 1px rgba(125, 195, 242, .7)',
    transition: 'all .22s ease-out'
  },

  titleBarTextField: {
    backgroundImage: '-webkit-linear-gradient(top, #ffffff 0%, #f1f1f1 100%)',
    boxShadow: 'none',
    borderTopColor: '#d0d0d0',
    borderLeftColor: '#cacaca',
    borderRightColor: '#cacaca',
    borderBottomColor: '#afafaf'
  },

  titleBarTextFieldFocus: {
    borderTopColor: '#6daed9',
    borderLeftColor: '#70aed4',
    borderRightColor: '#70aed4',
    borderBottomColor: '#6199bc'
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
  },

  label: {
    position: 'absolute',
    zIndex: '4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingRight: '18px',
    boxSizing: 'border-box',
    pointerEvents: 'none'
  },

  icon: {
    marginLeft: '6px',
    marginRight: '6px',
    paddingTop: '2px'
  },

  labelContent: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '2px'
  }
};
