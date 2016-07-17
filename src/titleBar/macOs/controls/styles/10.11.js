export default {
  close: {
    button: {
      WebkitUserSelect: 'none',
      userSelect: 'none',
      WebkitAppRegion: 'no-drag',
      cursor: 'default',
      boxSizing: 'border-box',
      width: '12px',
      height: '12px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '50%',
      marginTop: '1px',
      marginLeft: '5px',
      marginRight: '4px',
      lineHeight: 0,
      backgroundColor: '#ff5f57',
      borderColor: '#e2463f',

      ':active': {
        backgroundColor: '#bf4943',
        borderColor: '#ad3934'
      }
    },

    unfocused: {
      backgroundColor: '#dddddd',
      borderColor: '#d0d0d0',
    },

    icon: {
      width: '6px',
      height: '6px',
      marginTop: '2px',
      marginLeft: '2px'
    }
  },

  minimize: {
    button: {
      WebkitUserSelect: 'none',
      userSelect: 'none',
      WebkitAppRegion: 'no-drag',
      cursor: 'default',
      boxSizing: 'border-box',
      width: '12px',
      height: '12px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '50%',
      marginTop: '1px',
      marginLeft: '4px',
      marginRight: '4px',
      lineHeight: 0,
      backgroundColor: '#ffbd2e',
      borderColor: '#e1a116',

      ':active': {
        backgroundColor: '#bf9123',
        borderColor: '#ad7d15'
      }
    },

    unfocused: {
      backgroundColor: '#dddddd',
      borderColor: '#d0d0d0',
    },

    icon: {
      width: '8px',
      height: '2px',
      marginTop: '4px',
      marginLeft: '1px'
    }
  },

  resize: {
    button: {
      WebkitUserSelect: 'none',
      userSelect: 'none',
      WebkitAppRegion: 'no-drag',
      cursor: 'default',
      width: '12px',
      height: '12px',
      boxSizing: 'border-box',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '50%',
      marginTop: '1px',
      marginLeft: '4px',
      marginRight: '4px',
      lineHeight: 0,
      backgroundColor: '#28c940',
      borderColor: '#12ac28',

      ':active': {
        backgroundColor: '#1f9a31',
        borderColor: '#128622'
      }
    },

    unfocused: {
      backgroundColor: '#dddddd',
      borderColor: '#d0d0d0'
    },

    icon: {
      width: '6px',
      height: '6px',
      marginTop: '2px',
      marginLeft: '2px'
    }
  }
};
