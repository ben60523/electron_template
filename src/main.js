const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const rootPath = isDev ? path.resolve(__dirname, '../') : app.getAppPath();
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 610,
    height: 630,
    resizable: true,
    frame: true,
    show: false,
    webPreferences: {
      nodeIntegrationInWorker: true,
      nodeIntegration: true,
      preload: path.join(rootPath, './build/preload.js'),
    },
  });

  mainWindow.loadFile(path.resolve(rootPath, './build/index.html')).then(() => {
    mainWindow.show();
  });
});

app.on('second-instance', () => {
  app.exit();
});
