export default {
  sergmentedControl: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    flex: '1'
  },

  tabs: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },

  tab: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    background: '#ffffff',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#c7c7c7',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#a6a6a6',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: '#d8d8d8',
    paddingTop: '1px',
    paddingBottom: '2px',
    paddingLeft: '12px',
    paddingRight: '12px',
    lineHeight: '16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    fontSize: '13px',
    boxShadow: '0 1px rgba(0, 0, 0, .039), 0 0 .5px rgba(0, 0, 0, .1)',

    ':active': {
      background: '#f0f0f0'
    }
  },

  firstChild: {
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#b8b8b8',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },

  lastChild: {
    borderRightColor: '#b8b8b8',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px'
  },

  selected: {
    background: '-webkit-linear-gradient(top, #5ab2f6 0%, #0082fa 100%)',
    borderTopColor: '#30a0f5',
    borderBottomColor: '#0060fa',
    borderLeftColor: '#0080f7',
    borderRightColor: '#0080f7',
    color: 'white',
    borderRightWidth: '0px',
    paddingRight: '13px',
    paddingLeft: '13px',

    ':active': {
      background: '-webkit-linear-gradient(top, #3397f9 0%, #0068df 100%)',
      borderTopColor: '#007ff9',
      borderBottomColor: '#0040d8',
      borderLeftColor: '#0061e9',
      borderRightColor: '#0061e9',
      color: 'white'
    }
  },

  firstChildSelected: {
    paddingLeft: '12px'
  },

  lastChildSelected: {
    borderRightWidth: '1px',
    paddingRight: '12px'
  },

  prevSelected: {
    borderRightWidth: '0px',
    paddingRight: '12px'
  },

  afterSelected: {
  },

  selectedUnfocused: {
    background: '#e5e5e5',
    borderTopColor: '#c7c7c7',
    borderBottomColor: '#a6a6a6',
    borderLeftColor: '#b7b7b7',
    borderRightColor: '#b7b7b7',
    color: '#000000'
  }
};
