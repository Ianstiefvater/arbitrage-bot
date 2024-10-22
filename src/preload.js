const { contextBridge, ipcRenderer } = require('electron');

// Exponer funciones protegidas que permiten al renderer enviar/recibir información.
contextBridge.exposeInMainWorld('electronAPI', {
    sendToMainProcess: (data) => ipcRenderer.send('request-main-process-action', data),
    receiveFromMainProcess: (callback) => ipcRenderer.on('main-process-response', callback)
});
