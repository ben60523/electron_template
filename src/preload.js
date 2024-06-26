// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const {
  contextBridge,
  ipcRenderer
} = require("electron");

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type]);
  // }
  ['chrome', 'node', 'electron'].forEach((type) => {
    replaceText(`${type}-version`, process.versions[type]);
  });
});


// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  "api", {
      send: (channel, data) => {
          // whitelist channels
          // let validChannels = ["toMain"];
          // if (validChannels.includes(channel)) {
          //     ipcRenderer.send(channel, data);
          // }
          ipcRenderer.send(channel, data);
      },
      on: (channel, func) => {
          // let validChannels = ["fromMain"];
          // if (validChannels.includes(channel)) {
          //     // Deliberately strip event as it includes `sender` 
          //     ipcRenderer.on(channel, (event, ...args) => func(...args));
          // }
          ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
  }
);
