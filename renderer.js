// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
        console.log('abcd');
        const webview = document.getElementById('webview');
        webview.addEventListener('dom-ready', () => {
            var AppConfig = require('./../config.js');
            var config = AppConfig.store;
            console.log(config.defaults.userAgent);

            var options = { userAgent: config.defaults.userAgent };
            webview.loadURL('https://papago.naver.com/', options); 
        })
