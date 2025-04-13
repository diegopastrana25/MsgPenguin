const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    icon: path.join(__dirname, 'msgpenguin.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setMenuBarVisibility(false);
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
