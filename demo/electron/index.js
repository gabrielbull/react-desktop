const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
let mainWnd = null;

function createMainWnd() {
  mainWnd = new BrowserWindow({
    width:800,
    height:600,
    minWidth:800,
    maxWidth: 800,
    minHeight: 600,
    maxHeight: 600,
    backgroundColor:'#fbf2db',
    useContentSize: true,
    show: false,
    webPreferences: {
      webSecurity: false
    }
    // frame: false,
    // titleBarStyle: 'hidden'
  });

  mainWnd.loadURL('http://127.0.0.1:6000/index.html');

  mainWnd.on('ready-to-show', ()=>{
    Menu.setApplicationMenu(null);
    mainWnd.show();
    mainWnd.webContents.openDevTools({ detach:true });
  });

  mainWnd.on('closed', () => {
    mainWnd = null;
    process.exit();
  });
}

app.on('ready', ()=>{
  createMainWnd();
});

app.on('window-all-closed', () => {
  app.quit();
});
