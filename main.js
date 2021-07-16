const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    frame: true,
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3890/"
      : `file://${path.join(__dirname, "./public/index.html")}`
  );

  mainWindow.on("closed", () => {
    mainWindow = null
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});