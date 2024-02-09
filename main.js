const {app, BrowserWindow, protocol} = require('electron');

const url = require('url');

const path = require('path')

function createMainWindow () {
    const mainWindow = new BrowserWindow({
        title: 'electron',
        width: '1000',
        height: '600'
    });

    mainWindow.webContents.openDevTools();

    const startURL = url.format({
        pathname: path.join(__dirname,'./react-app/build/index.html'),
        protocol: 'file'
    });

    mainWindow.loadURL(startURL);
}

app.whenReady().then(createMainWindow);