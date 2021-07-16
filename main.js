const { app, BrowserWindow, Notification } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

const { notification } = require('./config')

let mainWindow;

// 创建窗体
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
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

// 通知窗体
function showNotification() {
  new Notification({ title: notification.title, body: notification.content }).show()
}

app.on('ready', showNotification);

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
