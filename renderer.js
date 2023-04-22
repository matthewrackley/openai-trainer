// @ts-nocheck
/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */


// const { AJAX, timezone, showAlert } = require("./preload");
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





// function setAPIkey () {
//     const modal = document.getElementById("modal");
//     const data = document.getElementById("data");
//     const APIKEY = document.getElementById('APIKEY');

//     if (data) {
//         data.textContent = "You must provide your API key to use this feature!";
//         modal.style.display = "block";
//         APIKEY.addEventListener('submit', async (event) => {
//             event.preventDefault();
//             // @ts-ignore
//             const formData = new FormData(event.target);
//             const key = formData.get('APIKEY').toString();
//             if (!key) {
//                 showAlert('You must provide your API key to use this feature!');
//                 return;
//             }
//             sessionStorage.setItem('OPENAI_API_KEY', key);
//             modal.style.display = "none";
//             return;
//         });
//     }
// };

const tempvalue = document.querySelector('#tempvalue')
const temperature = document.querySelector('#temperature')
tempvalue.textContent = temperature.value;
temperature.addEventListener("input", (event) => {
    tempvalue.innerHTML = event.target.value;
});

const root = {
    element: document.querySelector(':root'),
    get X () {
        return getComputedStyle(this.element).width;
    },
    get Y () {
        return getComputedStyle(this.element).height;
    },
    work: {
        element: document.getElementById('formDataEvent'),
        get X () {
            return getComputedStyle(this.element).width;
        },
        get Y () {
            return getComputedStyle(this.element).height;
        },
    },
};
const resize = {
    element: document.getElementById('formDataEvent'),
    get X () {
        return getComputedStyle(this.element).width;
    },
    get Y () {
        return getComputedStyle(this.element).height;
    },
    r: {
        element: document.getElementById('resizeIt'),
        get X () {
            const messageArea = document.querySelector('div.message-area');
            return getComputedStyle(messageArea).width;
        },
        get Y () {
            const inputArea = document.querySelector('div.input-area');
            return getComputedStyle(inputArea).height;
        },
    },
    d: {
        get X () {
            const optionArea = document.querySelector('div.options');
            return getComputedStyle(optionArea).width;
        },
        get Y () {
            const chatArea = document.querySelector('div.chat-area');
            return getComputedStyle(chatArea).height;
        },
    }
};
console.log(root.X); // 2560px
console.log(root.Y); // 1256px
console.log(root.work.X); // 2296px
console.log(root.work.Y); // 1114.4px
const work = {
    topO () {
        let offset = root.Y - root.work.Y;
        return offset;
    },
    leftO () {
        let offset = root.X - root.work.X;
        return offset;
    },
};
console.log(work.topO()); // NaN
console.log(work.leftO()); // NaN
console.log(resize.X); // 2296px
console.log(resize.Y); // 1114.4px
console.log(resize.r.X); // 1335.75px
console.log(resize.r.Y); // 221.267px
console.log(resize.d.X); // 449.917px
console.log(resize.d.Y); // 885.117px

// Make the DIV element draggable:
dragElement(document.getElementById("resizeIt"));

function dragElement (elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown (e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag (e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement () {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
// const resizer = {
//     element: document.getElementById('resizeIt'),
//     get X () {
//         return window.getComputedStyle(messageArea).width;
//     },
//     get Y () {
//         return window.getComputedStyle(inputArea).height;
//     },
// };
// const resized = {
//     get X () {
//         return window.getComputedStyle(optionArea).width;
//     },
//     get Y () {
//         return window.getComputedStyle(chatArea).height;
//     },
// }

let initYHt = root.Y - resize.r.Y;
let initXWd = root.X - resize.r.X;
console.log(initYHt);
console.log(initXWd);

var resizedHeight = window.getComputedStyle(document.getElementById('chat-area'));



// $("#message").resizable({
//     alsoResize: "#chat-area"
// });
    // let ourheight = document.getElementById('message').style.height; // NULL
    // let height = ht.getPropertyValue('--height'); // 80% starting value
    // let width = document.getElementById('message').style.width.; // NULL


function downHandler (ev) {
    const resizer = document.getElementById('resizeIt');
    resizer.setPointerCapture(ev.pointerId);

    let initX, initY, diffX, diffY;
    resizer.addEventListener('mousedown', function (dn) {
        initX = dn.clientX - resizer.offsetLeft;
        initY = dn.clientY - resizer.offsetTop;
        console.log(initX);
        console.log(initY);
    });
    let pointerCap = resizer.hasPointerCapture(ev.pointerId);
    if (pointerCap) {
        resizer.addEventListener('mousemove', function (mv) {
            diffX = mv.clientX - initX;
            diffY = mv.clientY - initY;

            resizer.style.left = (resizer.offsetLeft - diffX) + 'px';
            resizer.style.top = (resizer.offsetTop - diffY) + 'px';

            var adjustedLeft = resizer.style.left
            var adjustedTop = resizer.style.top
        });
        while (true) {
            root.setProperty('--height', resizedHeight.height);
            root.setProperty('--msgwidth', resizedWidthOne.width);
            resizedHeight.setProperty('height', resizedHeight.height);
            // resizedWidthTwo.setProperty(property, value)
        }

    } else {
    return
    }
}
function init () {
    const resizer = document.getElementById('resizeIt');
    resizer.onpointerdown = downHandler;
}




// chatHt.addEventListener('change', (event) => {
//     var dimensions = window.getComputedStyle(':root').getPropertyValue('--formheight'); // dimensions of the css :root element
//     // --msgwidth, --formheight and --chatheight are variables in the css file

//     window.getComputedStyle(ht).setProperty('--msgheight', '100%')
// }

// // Create a function for setting a variable value
// function myFunction_set () {
//     // Set the value of variable --blue to another value (in this case "lightblue")
//     r.style.setProperty('--blue', 'lightblue');
// }
// Handles the FormData that gets passed to the server.
// const formDataEvent = document.getElementById('formDataEvent');
// const form = document.querySelector('#formDataEvent');
// if (formDataEvent && formDataEvent.tagName !== "FORM") {
//     showAlert('You must provide data to send a message!');
// } else {
//     formDataEvent.addEventListener('submit', async (event) => {
//         event.preventDefault();
//         // @ts-ignore
//         const formData = new FormData(event.target);
//         const message = formData.get('param1');
//         if (!message) {
//             showAlert('Error: Missing required parameter "message"');
//             return;
//         }
//         // Determine whether a file was uploaded, and if so, add it to the form data.
//         const fileInput = formData.get('param2');
//         if (fileInput instanceof File && fileInput.size > 0) {
//             let params = {
//                 param1: message,
//                 param2: fileInput,
//             };
//             try {
//                 await callApiGateway(params, secureCookie);
//                 form.reset();
//                 console.log("Params submitted.");
//             } catch (error) {
//                 showAlert(`Error submitting data: ${ error.message }`);
//             }

//         // If the user doesn't upload a file, only assign param1
//         } else {
//             let params = {
//                 param1: message,
//                 param2: undefined,
//             }
//             try {
//                 await callApiGateway(params, secureCookie);
//                 form.reset();
//                 console.log("Params submitted.");
//             } catch (error) {
//                 showAlert(`Error submitting data: ${ error.message }`);
//             }
//         }
//     });
// };

// module.exports = {
//     uriSwap: (docID) => {
//         let Uri = AJAX.gen.defaultUri(docID);
//         window.history.replaceState({}, 'unused', Uri);
//         window.location.href = Uri;
//         return Uri;
//     },
// };





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







// const postRequest = http.request(postOptions, (res) => {
//     const response = {
//         method: 'POST',
//         url: '/index.html',
//         headers: {
//             cookie: res.headers['set-cookie'],
//         },
//         on: (eventName, callback) => {
//             if (eventName === 'data') {
//                 callback(postData);
//             }
//             if (eventName === 'end') {
//                 callback();
//             }
//         },
//     };
//     RequestHandler.callApiGateway(response, res.headers['set-cookie']);
// });





// postRequest.on('error', (error) => {
//     console.error(`POST request error: ${ error.message }`);
// });





// postRequest.write(postData);
// postRequest.end();



