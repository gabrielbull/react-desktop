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
    useContentSize: true,
    show: false,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWnd.loadURL('http://127.0.0.1:16000/index.html');

  mainWnd.on('ready-to-show', ()=>{
    Menu.setApplicationMenu(null);
    mainWnd.show();
    // mainWnd.webContents.openDevTools({ detach:true });
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
