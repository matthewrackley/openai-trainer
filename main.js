// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const App = require('./app.js');
const { fileUpload } = require('./commands/fileUpload.js');
const { event } = require('jquery')

let nonce = window.crypto.getRandomValues(new Uint8Array(32)).join('').replace(/\//g, '_');
sessionStorage.setItem('nonce', nonce);
window.addEventListener("beforeunload", function (event) {
  sessionStorage.removeItem('nonce');
});

let metaTag = document.createElement("meta");
metaTag.nonce = nonce;
document.head.appendChild(metaTag);

const formDataEvent = document.getElementById('formDataEvent');
if (formDataEvent && formDataEvent.tagName === "FORM") {
  formDataEvent.addEventListener('submit', (event) => {
    if (event.target instanceof HTMLFormElement) {
      const formData = new FormData(event.target);
      callApiGateway(formData);
      event.preventDefault();
    }
  });
} else {
  console.error('Form data event does not exist or is not a form element');
}

const fileInput = document.querySelector('input[type="file"]');
const selectFile = async () => {
  if (fileInput instanceof HTMLInputElement) {
    fileInput?.click();
    await new Promise(resolve => fileInput?.addEventListener('change', resolve));
    if (fileInput.files && fileInput.files.length > 0) {
      callApiGateway(fileInput.files);
    } else {
      console.log('No files selected');
    }
  }
};

const callApiGateway = (files, message) => {
  try {
    const bodyData = {};
    if (message !== undefined) {
      bodyData.message = message;
    }
    if (files !== undefined && files.length > 0) {
      bodyData.files = files;
    }
    fetch('/api/gateway.js', {
      method: 'POST',
      body: JSON.stringify(bodyData),
    }).then(response => {
      if (response.ok) {
        console.log('Data submitted successfully');
      } else {
        throw new Error('Server returned an error');
      }
    });
  } catch (error) {
    console.error(error);
  }
};




