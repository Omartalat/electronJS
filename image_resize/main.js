const { app, BrowserWindow } = require("electron");
const path = require("path");

process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production";

const isMac = process.platform === "darwin";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "Image Resize",
    width: 500,
    height: 600,
    icon: path.join(__dirname, "assets", "icons", "Icon_256x256.png"),
    resizable: isDev,
  });

  mainWindow.loadFile(`${__dirname}/app/index.html`);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
