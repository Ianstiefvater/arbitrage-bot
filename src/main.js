const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    // Crear la ventana del navegador.
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),  // Usar preload para comunicación segura
            nodeIntegration: false,
            contextIsolation: true,  // Proteger contra código malicioso en el renderer
            enableRemoteModule: false  // Deshabilitar módulo remoto
        }
    });

    // Cargar index.html en la ventana.
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    // Abrir las herramientas de desarrollo (descomentar en producción).
    // mainWindow.webContents.openDevTools();
}

// Este método será llamado cuando Electron haya finalizado la inicialización y esté listo para crear ventanas del navegador.
// Algunas APIs solo pueden usarse después de que este evento ocurra.
app.whenReady().then(createWindow);

// Salir cuando todas las ventanas estén cerradas, excepto en macOS.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // En macOS es común volver a crear una ventana en la app cuando
    // el ícono del dock es clickeado y no hay otras ventanas abiertas.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// Escuchar mensajes del renderer y responder
ipcMain.on('request-main-process-action', (event, arg) => {
    console.log(arg);  // log the message from renderer
    event.reply('main-process-response', 'Received your message');
});

//actualizar la aplicación en cada cambio 
require('electron-reload')(__dirname);


