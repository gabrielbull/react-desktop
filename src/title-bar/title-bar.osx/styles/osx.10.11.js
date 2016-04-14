export default {
  titleBar: {
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'drag',
    cursor: 'default',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    height: '20px',
    backgroundImage: '-webkit-linear-gradient(top, #ededed 0, #ededed 1px, #e7e7e7 2px, #d1d1d1 100%)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#afafaf',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#f6f6f6',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    paddingLeft: '3px',
    paddingRight: '3px',
    overflow: 'hidden'
  },

  unfocusedTitleBar: {
    backgroundImage: '-webkit-linear-gradient(top, #fafafa 0px, #f6f6f6 2px, #f6f6f6 100%)',
    borderBottomColor: '#d1d1d1'
  },

  toolbar: {
    height: '36px',
    paddingLeft: '9px',
    paddingRight: '9px'
  },

  title: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
    fontSize: '13px',
    fontWeight: '300',
    letterSpacing: '0.5px',
    color: '#4d4d4d',
    flexGrow: '1',
    flexShrink: '1',
    textAlign: 'center',
    lineHeight: '22px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },

  unfocusedTitle: {
    color: '#d3d3d3'
  }
};
