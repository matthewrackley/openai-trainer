/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const { AJAX, timezone, showAlert } = require("./preload");
// Set a nonce to correctly guard webapp

// This code shows an alert to the user.
// function showAlert(message) {
//     const modal = document.getElementById("modal");
//     const data = document.getElementById("data");

//     if (data) {
//         data.textContent = message;
//         modal.style.display = "block";
//     }
// };
function setAPIkey () {
    const modal = document.getElementById("modal");
    const data = document.getElementById("data");
    const APIKEY = document.getElementById('APIKEY');

    if (data) {
        data.textContent = "You must provide your API key to use this feature!";
        modal.style.display = "block";
        APIKEY.addEventListener('submit', async (event) => {
            event.preventDefault();
            // @ts-ignore
            const formData = new FormData(event.target);
            const key = formData.get('APIKEY').toString();
            if (!key) {
                showAlert('You must provide your API key to use this feature!');
                return;
            }
            sessionStorage.setItem('OPENAI_API_KEY', key);
            modal.style.display = "none";
            return;
        });
    }
};

// Handles the FormData that gets passed to the server.
const formDataEvent = document.getElementById('formDataEvent');
const form = document.querySelector(#formDataEvent);
if (formDataEvent && formDataEvent.tagName !== "FORM") {
    showAlert('You must provide data to send a message!');
} else {
    formDataEvent.addEventListener('submit', async (event) => {
        event.preventDefault();
        // @ts-ignore
        const formData = new FormData(event.target);
        const message = formData.get('param1');
        if (!message) {
            showAlert('Error: Missing required parameter "message"');
            return;
        }
        // Determine whether a file was uploaded, and if so, add it to the form data.
        const fileInput = formData.get('param2');
        if (fileInput instanceof File && fileInput.size > 0) {
            let params = {
                param1: message,
                param2: fileInput,
            };
            try {
                await callApiGateway(params, secureCookie);
                form.reset();
                console.log("Params submitted.");
            } catch (error) {
                showAlert(`Error submitting data: ${ error.message }`);
            }

        // If the user doesn't upload a file, only assign param1
        } else {
            let params = {
                param1: message,
                param2: undefined,
            }
            try {
                await callApiGateway(params, secureCookie);
                form.reset();
                console.log("Params submitted.");
            } catch (error) {
                showAlert(`Error submitting data: ${ error.message }`);
            }
        }
    });
};

module.exports = {
    uriSwap: (docID) => {
        let Uri = AJAX.gen.defaultUri(docID);
        window.history.replaceState({}, 'unused', Uri);
        window.location.href = Uri;
        return Uri;
    },
};
//     document.getElementById(docID).addEventListener("click", function (event) {
//         event.preventDefault(); // prevent the default behavior of the link
//         var xhr = new XMLHttpRequest(); // create a new AJAX request
//         xhr.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 // handle the response from the server
//                 console.log(this.responseText);
//             }
//         };
//         const fullHandler = AJAX.url + AJAX.handler; // the URL of the server-side script that will handle the request
//         xhr.open("GET", fullHandler, true); // configure the AJAX request
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.setRequestHeader('Accept', 'application/json');
//         xhr.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 console.log(this.responseText);
//             }
//         };
//         xhr.send(JSON.stringify({ param1, param2 })); // send the AJAX request
//     });
// };

// async function callApiGateway (data, cookie) {
//     const { param1, param2 } = data;
//     await fetch('http://192.168.0.155:5500/api/gateway.js', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Set-Cookie': cookie,
//         },
//         body: JSON.stringify({ param1, param2 }),
//     }).then(response => {
//         if (response.ok) {
//             console.log('Data submitted successfully');
//         } else {
//             throw new Error(`Server returned an error: ${ response.status }`);
//         }
//     }).catch(error => console.log('Fetch Error:', error));
// };



const postRequest = http.request(postOptions, (res) => {
    const response = {
        method: 'POST',
        url: '/index.html',
        headers: {
            cookie: res.headers['set-cookie'],
        },
        on: (eventName, callback) => {
            if (eventName === 'data') {
                callback(postData);
            }
            if (eventName === 'end') {
                callback();
            }
        },
    };
    RequestHandler.callApiGateway(response, res.headers['set-cookie']);
});

postRequest.on('error', (error) => {
    console.error(`POST request error: ${ error.message }`);
});

postRequest.write(postData);
postRequest.end();



