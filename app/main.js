(function() {
  'use strict';
  var BrowserWindow, app, autoUpdater, globalShortcut, mainWindow, mouseDown, path, ready, robot, url;

  ({app, BrowserWindow, globalShortcut} = require('electron'));

  ({autoUpdater} = require('electron-updater'));

  url = require('url');

  path = require('path');

  robot = require('robot-js');

  mouseDown = false;

  mainWindow = null;

  ready = function() {
    return globalShortcut.register('CommandOrControl+Shift+R', function() {
      if (!mouseDown) {
        mouseDown = true;
        return robot.mouseToggle('down', 'right');
      } else {
        mouseDown = false;
        return robot.mouseToggle('up', 'right');
      }
    });
  };

  app.on('ready', ready);

  app.on('window-all-closed', function() {
    return process.platform === 'darwin' || app.quit();
  });

  app.on('activiate', function() {
    return mainWindow || ready();
  });

}).call(this);

//# sourceMappingURL=main.js.map
