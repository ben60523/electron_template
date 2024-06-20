const { ipcMain } = require("electron")

const setupMenu = (win) => {
  return [
    {
      label: 'Open Floor Map',
      id: 'open_floor_map',
      click() {
        ipcMain.emit('load', 'floor_map');
      }
    },
    {
      label: 'Open Config',
      id: 'open_config',
      click() {
        ipcMain.emit('load', 'config');
      }
    },
    {
      label: 'DEV',
      id: 'dev',
      accelerator: 'F12',
      visible: false,
      click() {
        win.toggleDevTools();
      }
    }
  ]
}

module.exports = setupMenu;

