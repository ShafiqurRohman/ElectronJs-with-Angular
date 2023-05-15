const { app, BrowserWindow , Menu, dialog} = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 850,
        height: 600,
        minHeight: 400,
        minWidth: 700,
        show: false, // Don't show the window until it's ready
        // webPreferences: {
        //   preload: path.join(__dirname, 'preload.js'),
        // },
        background: 'url(https://cdn.forms.office.net/forms/images/aio/wave-pattern-v1.svg)center top / cover no-repeat fixed,linear-gradient(90deg,rgba(3, 120, 124, 0.2) 0%,rgba(3, 120, 124, 0.8) 100%);',
        // icon: path.join(__dirname, 'icon.png')
    });

    // and load the index.html of the app.
    mainWindow.loadFile('dist/microsoft-form-builder/index.html');

    mainWindow.on('ready-to-show', () => {
    mainWindow.show(); // Show the window when it's ready
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

const menuTemplete = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click: async () => {
          const {canceled, filePaths} = dialog.showOpenDialog({properties: ['openFile']})
          .then(result => {
            // console.log(result.canceled)
            // console.log(result.filePaths)
          })
          .catch(err => {
            // console.log(err)
          })

          if(!canceled) {
            // console.log(filePaths[0])
          }
        }
      },
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        click: () => {
          console.log('Save');
        }
      },
      {
        label: 'Save As',
        accelerator: 'Shift+CmdOrCtrl+S',
        click: () => {
          console.log('Save As');
        } 
      },
      {
        label: 'Exit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
          app.quit();
        }
      } 
    ]
  },
  {
    label: 'Insert',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',

        role: 'undo',
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',

        role: 'redo',
      }
    ],
  
   },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',

        role: 'copy',
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',

        role: 'paste',
      }
    ]
  },
  ];

  const menu = Menu.buildFromTemplate(menuTemplete);
  Menu.setApplicationMenu(menu);


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
