export default {
  window: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ececec',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box'
  },

  chrome: {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    boxShadow:
    '0 0 1px rgba(0, 0, 0, .26), ' + // Border
    '0 0 5px rgba(0, 0, 0, .16), ' + // Small Glow
    '0 8px 10px rgba(0, 0, 0, .06), ' + // Bottom Glow
    '0 25px 65px rgba(0, 0, 0, .48) ' // Big shadow
  },

  unfocused: {
    boxShadow:
    '0 0 1px rgba(0, 0, 0, .31), ' + // Border
    '0 0 5px rgba(0, 0, 0, .18), ' + // Small Glow
    '0 8px 50px rgba(0, 0, 0, .3) ' // Big shadow
  },

  content: {
    flex: 1,
    padding: '24px 20px 20px 20px'
  }
};
