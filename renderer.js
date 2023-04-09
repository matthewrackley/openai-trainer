/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const crypto = require('crypto');
const secureKey = () => {
    return new Promise((resolve, reject) => {
        crypto.generateKey('hmac', { length: 256 }, (err, key) => {
            if (err) {
                return reject(err);
            }
            const secureKey = key.export().toString('hex');
            resolve(secureKey);
        });
    });
};


// This code listens for the resulting output from the formdata event.
function showAlert(message) {
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
        event.preventDefault();
        if (event.target instanceof HTMLFormElement) {
            const formData = new FormData(event.target);
            const message = formData.get('message');
            if (!formData) {
                console.log("error 1");
                console.log('Error: No data received')
                return
            }
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput instanceof HTMLInputElement) {
                if (fileInput.files && fileInput.files.length > 0) {
                    formData.append('file', fileInput.files[0]);
                } else {
                    console.log('Error: No data received');
                }
            } else {
                console.log('No files selected');
            }
            processData(formData);
        };
    });
} else {
    console.log('You must provide data to send a message');
}

function processData (input) {
    if (input.length < 1 || input.length > 2) {
        console.log('Error: Invalid number of parameters passed');
        return;
    }
    let inputData = {
        param1: input[0],
    };
    if (input.length === 2) {
        inputData.param2 = input[1];
    }
    callApiGateway(inputData);
}

function callApiGateway (data) {
    const HeaderHash = secureKey;
    fetch('./api/gateway.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            '': HeaderHash,
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (response.ok) {
            console.log('Data submitted successfully');
        } else {
            throw new Error('Server returned an error');
        }
    }).catch(error => console.log('Fetch Error:', error));
};
