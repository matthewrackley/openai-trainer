/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// Set a nonce to correctly guard webapp
const gen = {
    nonce () {
        let nonce = crypto.getRandomValues(new Uint8Array(32))
            .join('')
            .replace(/\//g, '_');
        return nonce;
    },
    sec (request) {
        if (request !== 'cookie' && request !== 'css' && request !== 'script') {
            return;
        }
        if (request === 'cookie') {
            let cookie = gen.nonce();
            return cookie;
        }
        if (request === 'css') {
            let css = gen.nonce();
            return css;
        }
        if (request === 'script') {
            let script = gen.nonce();
            return script;
        };
    },
    link (ref) {
        const url = 'http://192.168.0.155/';
        const uri() {
            'myaccount': url + 'myaccount',
            'login': 'http://192.168.0.155/login',
            'register': 'http://192.168.0.155/register',
            'forgot': 'http://199
        }

        ]

    elements: function (method) {
        if (method !== 'css' && method !== 'script') {
            return;
        }
        if (method === 'css') {
            const css = gen.sec('css');
            document.createAttribute('nonce').value = css;
            document.querySelectorAll('link[href]')
                .forEach((el) => {
                    el.setAttribute('nonce', css);
                });
            return css;
        }
        if (method === 'script') {
            const script = gen.sec('script');
            const scriptNonce = document.createAttribute('nonce').value = script;
            document.querySelectorAll('*[nonce]:not(link[href])')
                .forEach((el) => {
                    el.setAttribute('nonce', script);
                });
            return script;
        };
    },
};
const headers = {
    http: 'http-equiv',
    pol: 'Content-Security-Policy',
    cont: 'content',
    src: `default-src 'self'; style-src fonts.gstatic.com fonts.googleapis.com 'self' 'unsafe-inline' 'nonce-${ gen.elements('css') }'; font-src fonts.gstatic.com fonts.googleapis.com; script-src 'self' 'nonce-${ gen.elements('script') }' 'strict-dynamic';`,
    xattr: 'X-Content-Type-Options',
    xval: `text/html; nosniff;`,
};
const csp = {
    id: document.getElementById('CSP'),
    set: function (attr, data) {
        csp.id.setAttribute(attr, data);
    },
    apply() {
        document.cookie = `nonce=${ encodeURIComponent(gen.sec('cookie')) }; HttpOnly; SameSite=None; Secure;`;
        const secureCookie = document.cookie;
        csp.set(headers.http, headers.pol);
        csp.set(headers.cont, headers.src);
        csp.set(headers.xattr, headers.xval);
        return secureCookie;
    },
};
const secureCookie = csp.apply();

// This code shows an alert to the user.
function showAlert(message) {
    const modal = document.getElementById("modal");
    const data = document.getElementById("data");

    if (data) {
        data.textContent = message;
        modal.style.display = "block";
    }
};
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

function changeURI (docID) {
    if (docID ===)
}

// Handles the FormData that gets passed to the server.
const formDataEvent = document.getElementById('formDataEvent');
const form = document.querySelector('form');
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

async function callApiGateway (data, cookie) {
    const { param1, param2 } = data;
    await fetch('http://192.168.0.155:5500/api/gateway.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Set-Cookie': cookie,
        },
        body: JSON.stringify({ param1, param2 }),
    }).then(response => {
        if (response.ok) {
            console.log('Data submitted successfully');
        } else {
            throw new Error(`Server returned an error: ${ response.status }`);
        }
    }).catch(error => console.log('Fetch Error:', error));
};


const postData = JSON.stringify({ param1: 'test1', param2: 'test2' });

const postOptions = {
    hostname: 'http://192.168.0.155',
    port: 5500,
    path: '/index.html',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': secureCookie,
        'Content-Length': Buffer.byteLength(postData),
    },
};

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
    callApiGateway(response, res.headers['set-cookie']);
});

postRequest.on('error', (error) => {
    console.error(`POST request error: ${ error.message }`);
});

postRequest.write(postData);
postRequest.end();
