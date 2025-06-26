const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  renderVideo: (job) => ipcRenderer.invoke('render-video', job)
});
