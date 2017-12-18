const electron = require('electron');
const menubar = require('menubar');
const AppConfig = require('./config.js');
var config = AppConfig.store.userPreferences;

var mb = menubar(Object.assign(AppConfig.store.defaults));

mb.on('ready', function ready() {
    console.log('app is ready');
});

mb.on('after-create-window', function () {
    mb.window.setResizable(config.windowResize);
    mb.window.setMinimumSize(400, 400);
    mb.tray.setImage(AppConfig.store.defaults.icon);

});

mb.on('focus-lost', function () {
    mb.hideWindow();
});