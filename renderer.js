/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
/** @jsx React.DOM */
const { User, userClient, botClient } = require('./classes/User');
require('./app.js');
require('./classes/ChatMessagwe')

let dataStrings = {};

// Receive data and add it to the corresponding command
function dataTransfer (command, data) {
    if (!dataStrings[command]) {
        dataStrings[command] = [];
    }
    dataStrings[command].push(data);
    processData(command);
}

// Process the data from the command
function processData (command) {
    let expectedStrings = 3;
    let receivedStrings = dataStrings[command].length ? dataStrings[command].length : 0;

    if (receivedStrings === expectedStrings) {
        let jsonData = JSON.stringify(dataStrings[command]);
        let options = JSON.parse(jsonData);
        callApiGateway(options, command);
        dataStrings[command] = [];
    }
}

// This code listens for the resulting output from the formdata event.
const showAlert = (message) {
    this.message = message;
    const modal = document.getElementById("modal");
    let p = document.getElementById("data");
    const span = document.getElementById("close");
    if (modal && span) {
        span.onclick = function () {
            modal.style.display = "none";
        };
    };
};

const formDataEvent = document.getElementById('formDataEvent');
if (formDataEvent && formDataEvent.tagName === "FORM") {
    formDataEvent.addEventListener('submit', (event) => {
        if (event.target instanceof HTMLFormElement) {
            const formData = new FormData(event.target);
            dataTransfer('sendMessage', formData);
            event.preventDefault();
        }
    });
} else {
    console.error('Form data event does not exist or is not a form element');
}

const fileLoader = document.getElementById('fileInput')?.attachInternals();
let files = fileLoader
let data = fileLoader?.addEventListener('change', result);
if (data)

    const selectFile(files) {
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput instanceof HTMLInputElement) {
            fileInput?.click();
            await new Promise(resolve => fileInput?.addEventListener('change', resolve));
            if (fileInput.files && fileInput.files.length > 0) {
                dataTransfer('fileUpload', fileInput.files);
            } else {
                console.log('No files selected');
            }
        }
    };




const callApiGateway = (options, command) => {
    try {
        const bodyData = {};
        if (options !== undefined) {
            bodyData.message = message;
        }
        if (files !== undefined && files.length > 0) {
            bodyData.files = files;
        }
        fetch('https://localhost:3000/api/gateway.js', {
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

await processData(callApiGateway(options));
