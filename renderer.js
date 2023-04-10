/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// This code shows an alert to the user.
function showAlert(message) {
    const modal = document.getElementById("modal");
    let p = document.getElementById("data");
    const span = document.getElementById("close");
    if (modal && span) {
        span.onclick = function () {
            modal.style.display = "none";
        };
    }
    if (p) {
        p.textContent = message;
        modal.style.display = "block";
    }
};

// Handles the FormData that gets passed to the server.
const formDataEvent = document.getElementById('formDataEvent');
if (formDataEvent && formDataEvent.tagName !== "FORM") {
    showAlert('You must provide data to send a message!');
} else {
    formDataEvent.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Identifies the file that the user uploads.
        const fileInput = document.querySelector('input[type="file"]');

        // If the user uploads a file, assign it to param2
        if (fileInput instanceof HTMLInputElement && fileInput.files.length > 0) {

            // param1 is the Text input from FormData
            const message = formData.get('param1');

            // param2 is the File input from FormData
            const file = fileInput.files[0];
            formData.append('param2', file);
            const files = formData.get('param2');

            // Assign the values appropriately
            let params = {
                param1: message,
                param2: files,
            }

            // If param1 doesn't exist, show an Alert to the user.
            if (!params.param1) {
                showAlert('Error: Missing required parameter "message"');
                return;
            }
            try {
                await callApiGateway(params);
                console.log("Data submitted successfully");
            } catch (error) {
                showAlert(`Error submitting data: ${ error.message }`);
            }

        // If the user doesn't upload a file, only assign param1
        } else {
            const message = formData.get('param1');
            let params = {
                param1: message,
            }
            if (!params.param1) {
                showAlert('Error: Missing required parameter "message"');
                return;
            }
            try {
                await callApiGateway(params);
                console.log("Data submitted successfully");
            } catch (error) {
                showAlert(`Error submitting data: ${ error.message }`);
            }
        }
    });
};

async function callApiGateway (data) {
    await fetch('./api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
