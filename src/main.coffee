'use strict'

{app, BrowserWindow, globalShortcut} = require 'electron'
{autoUpdater} = require 'electron-updater'
url = require 'url'
path = require 'path'
robot = require 'robot-js'

mouseDown = false
mainWindow = null
ready = ->
  globalShortcut.register 'CommandOrControl+Shift+R', ->
    if not mouseDown
      mouseDown = true
      robot.mouseToggle 'down', 'right'
    else
      mouseDown = false
      robot.mouseToggle 'up', 'right'
app.on 'ready', ready
app.on 'window-all-closed', ->
  process.platform is 'darwin' or app.quit()
app.on 'activiate', ->
  mainWindow or ready()