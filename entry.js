/* eslint-disable global-require */
const electron = require('electron');

if (!electron.app.isPackaged) {
  require('./out/main.js');
} else {
  require('./prod/main.js');
}
