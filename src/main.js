const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const setupMenu = require('./menu');

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
      nodeIntegration: false,
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(rootPath, isDev ? './out/preload.js' : './prod/preload.js'),
    },
  });

  const menu = Menu.buildFromTemplate(setupMenu(mainWindow));
  Menu.setApplicationMenu(menu);

  mainWindow.loadFile(path.resolve(rootPath, isDev ? './out/index.html' : './prod/index.html')).then(() => {
    mainWindow.show();
  });
});

app.on('second-instance', () => {
  app.exit();
});

ipcMain.on('load', (...arg) => {
  if (arg[0] === 'floor_map') {
    console.log('open floor map');
    dialog.showOpenDialog(mainWindow, {title: 'Open Floor Map', filters: [
      { name: 'Images', extensions: ['pgm'] },
    ]}).then((file_name) => {
      console.log(`${file_name.filePaths} is selected`);
      mainWindow.webContents.send('floor_map_view', 'load', file_name.filePaths);
    });
  } else if (arg[0] === 'config') {
    console.log('open config file');
    dialog.showOpenDialog(mainWindow, {title: 'Open YAML File', filters: [
      { name: 'All Files', extensions: ['yaml'] },
    ]}).then((file_name) => {
      console.log(`${file_name.filePaths} is selected`);
    });
  }
  
});