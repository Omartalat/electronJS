const { app, BrowserWindow } = require("electron");

process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production";

const isWin = process.platform === "win32";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "Image Resize",
    width: 500,
    height: 600,
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    resizable: isDev,
  });

  mainWindow.loadFile(`${__dirname}/app/index.html`);
}

app.whenReady().then(() => {
  createWindow();
});
