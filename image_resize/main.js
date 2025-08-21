const { app, BrowserWindow } = require("electron/main");

let mainWindow;

function createWindow(BrowserWindow) {
  mainWindow = new BrowserWindow({
    title: "Image Resize",
    width: 500,
    height: 600,
    icon: "./assets/icons/Icon_256x256.png",
  });

  mainWindow.loadFile("./app/index.html");
}

app.whenReady().then(() => {
  createWindow(BrowserWindow);
});
