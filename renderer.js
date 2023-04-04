/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
/** @jsx React.DOM */


// This code listens for the resulting output from the formdata event.

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


const selectFile = async () => {
    const fileInput = document.querySelector('input[type="file"]');
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
