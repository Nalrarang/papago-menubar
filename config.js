var Config = require('electron-config');

var instance = '';
var path = __dirname;

var userPreferences = {
    alwaysOnTop: false,
    windowResize: false,
    windowDraggable: false,
    windowPosition: 'trayCenter',
    globalShortcuts: true
};
var defaults = {
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.2; en-us; Nexus 10 Build/JVP15I) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
    width: 400,
    height: 800,
    externalLinks: false,
    icon: path + '/icons/icon.iconset/icon_16x16.png',
    preloadWindow: true,
    tooltip: 'Naver PaPago Translater'
};

function AppConfig() {
    var config = new Config();
    config.set(Object.assign(userPreferences, config.store));    
    this.config = config;

    Object.defineProperty(this, 'store', {
        get : function() {
            return {
                all: Object.assign(defaults, config.store),
                userPreferences: config.store,
                defaults: defaults
            }
        }
    });
}

AppConfig.prototype = {
    update: function (config) {
        this.config.set(config);
    }
};


var getInstance = function() {
    instance = instance || new AppConfig();
    return instance
}


module.exports = getInstance();
