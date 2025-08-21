const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production";

const isMac = process.platform === "darwin";

function createWindow() {
  const mainWindow = new BrowserWindow({
    title: "Image Resize",
    width: 500,
    height: 600,
    icon: path.join(__dirname, "assets", "icons", "Icon_256x256.png"),
    // Window is resizable only in development mode for easier debugging
    resizable: isDev,
  });

  mainWindow.loadFile(path.join(__dirname, "app", "index.html"));
}

const menu = [
  ...(isMac ? [{ role: "appMenu" }] : []),
  { role: "fileMenu" },
  { role: "editMenu" },
  { role: "viewMenu" },
  {
    label: "About",
    click: () => {
      console.log("About clicked");
    },
  },
];

app.whenReady().then(() => {
  createWindow();
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
});

app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
