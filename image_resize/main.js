const { app, BrowserWindow } = require("electron/main");

function createWindow(BrowserWindow) {
  const mainWindow = new BrowserWindow({
    title: "Image Resize",
    width: 500,
    height: 600,
  });
}

app.whenReady().then(() => {
  createWindow(BrowserWindow);
});
