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
const resizer = document.getElementById('resizeIt');
prototype
class Resizer extends HTMLElement {
    constructor (...element, isQuery = true) {
        super();
        this.element = [];
        if (typeof element === 'string') {
            if (isQuery) {
                this.element.push(document.querySelector(element));
            } else {
                this.element.push(document.getElementById(element));
            }
        } else if (element instanceof HTMLElement) {
            this.element.push(element);
        } else {
            throw new Error('Element must be a string or an HTMLElement \n' +
                `Example: new Resizer('#element') or new Resizer(document.getElementById('element'))`);
        }
        if (this.element.length === 0) {
            throw new Error(`No element found for ${ element }`);
        }
    };
    get X () {
        return getComputedStyle(this.element).width;
    };
    get Y () {
        return getComputedStyle(this.element).height;
    };

    get style () {
        return window.getComputedStyle(this.element);
    };
    get fontSz () {
        return parseFloat(getComputedStyle(document.documentElement).fontSize);
    };
    get border () {
        const border = this.style.border.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * this.fontSz);
        return border.reduce((sum, value) => sum + value, 0) + 'px';
    };
    get margin () {
        const margin = this.style.margin.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * this.fontSz);
        return margin.reduce((sum, value) => sum + value, 0) + 'px';
    };
    get padding () {
        const padding = this.style.padding.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * this.fontSz);
        return padding.reduce((sum, value) => sum + value, 0) + 'px';
    };
    get offset () {
        const offset = this.style.offset.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * this.fontSz);
        return offset.reduce((sum, value) => sum + value, 0) + 'px';
    };
    get width () {
        return parseFloat(this.X) - parseFloat(this.border) - parseFloat(this.margin) - parseFloat(this.padding) - parseFloat(this.offset);
    };
    get height () {
        return parseFloat(this.Y) - parseFloat(this.border) - parseFloat(this.margin) - parseFloat(this.padding) - parseFloat(this.offset);
    };
    get left () {
        return parseFloat(this.style.left);
    };
    get right () {
        return parseFloat(this.style.right);
};
const pop = {
    opt: {
        left: {
            el: document.getElementById('opt-left'),
            get X () {
                return getComputedStyle(root.opt.left.el).width;
            },
        },
        middle: {
            el: document.getElementById('opt-middle'),
            get X () {
                return getComputedStyle(root.opt.middle.el).width;
            },
        },
        right: {
            el: document.getElementById('opt-right'),
            get X () {
                return getComputedStyle(root.opt.right.el).width;
            },
        },
        get Y () {
            return getComputedStyle(root.opt.left.el).height;
        }
    },
    msg: {
        el: document.querySelector('div.message-area'),
        get X () {
            return getComputedStyle(root.msg.el).width;
        },
        get Y () {
            return getComputedStyle(root.msg.el).height;
        },
    },
    chat: {
        el: document.querySelector('div.chat-area'),
        get X () {
            return getComputedStyle(root.chat.el).width;
        },
        get Y () {
            return getComputedStyle(root.chat.el).height;
        },
    },
    clmn: {
        el: document.querySelector('#chatcolumn'),
        get X () {
            return getComputedStyle(root.clmn.el).width;
        },
        get Y () {
            return getComputedStyle(root.clmn.el).height;
        },
        get style () {
            return window.getComputedStyle(root.clmn.el);
        },
        get fontSz () {
            return parseFloat(getComputedStyle(document.documentElement).fontSize);
        },
        get border () {
            const border = root.clmn.style.border.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * root.clmn.fontSz);
            return border.reduce((sum, value) => sum + value, 0) + 'px';
        },
        get margin () {
            const margin = root.clmn.style.margin.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * root.clmn.fontSz);
            return margin.reduce((sum, value) => sum + value, 0) + 'px';
        },
        get padding () {
            const padding = root.clmn.style.padding.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * root.clmn.fontSz);
            return padding.reduce((sum, value) => sum + value, 0) + 'px';
        },
        get totalVal () {
            return parseInt(root.clmn.border, 10) + parseInt(root.clmn.margin, 10) + parseInt(root.clmn.pad, 10) + 'px';
        },
        get totalMrg () {
            return parseInt(root.clmn.border, 10) + parseInt(root.clmn.padding, 10) + 'px';
        }
    },
    form: {
        el: document.getElementById('formDataEvent'),
        get X () {
            return getComputedStyle(root.form.el).width;
        },
        get Y () {
            return getComputedStyle(root.form.el).height;
        },
        get style () {
            return window.getComputedStyle(root.form.el);
        },
        get fontSz () {
            return parseFloat(getComputedStyle(document.documentElement).fontSize);
        },
        get border () {
            const border = root.form.style.border.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * root.form.fontSz);
            return border.reduce((sum, value) => sum + value, 0) + 'px';
        },
        get margin () {
            const margin = root.form.style.margin.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * root.form.fontSz);
            return margin.reduce((sum, value) => sum + value, 0) + 'px';
        },
        get padding () {
            const padding = root.form.style.padding.match(/\d+\.?\d*rem/g).map(value => parseFloat(value) * root.form.fontSz);
            return padding.reduce((sum, value) => sum + value, 0) + 'px';
        },
        get totalVal () {
            return parseInt(root.form.border, 10) + parseInt(root.form.margin, 10) + parseInt(root.form.padding, 10) + 'px';
        },
        get totalMrg () {
            return parseInt(root.form.border, 10) + parseInt(root.form.padding, 10) + 'px';
        },
        boundary: {
            get left () {
                return (parseInt(root.form.X, 10) * 0.25) + 'px';
            },
            get top () {
                return doc.header + 'px';
            },
            get bottom () {
                return (parseInt(root.form.Y, 10) * 0.2) + 'px';
            },
            get width () {
                return (parseInt(root.form.X, 10) * 0.725) + 'px'
            },
            get right () {
                return (root.form.X - (root.form.boundary.left + root.form.boundary.width)) + 'px';
            },
            get height () {
                return (root.form.Y * 0.8) + 'px';
            }
        }
    },

};

const


const doc = {
    el: document.querySelector(':root'),
    get X () {
        return getComputedStyle(doc.el).width;
    },
    get Y () {
        return getComputedStyle(doc.el).height;
    },
    get header () {
        return (parseInt(doc.Y, 10) * 0.1) + 'px';
    },
    get sidebar () {
        return (parseInt(doc.X, 10) * 0.1) + 'px';
    },
    boundary: {
        get left () {
            return (parseInt(form.X, 10) * 0.25) + 'px';
        },
        get top () {
            return doc.header + 'px';
        },
        get bottom () {
            return (parseInt(form.Y, 10) * 0.2) + 'px';
        },
        get width () {
            return (parseInt(form.X, 10) * 0.725) + 'px'
        },
        get right () {
            return (form.X - (doc.boundary.left + doc.boundary.width)) + 'px';
        },
        get height () {
            return (form.Y * 0.8) + 'px';
        }
    }
}
function check () {
    const workingAreaWidth = (parseInt(column.X, 10) + 'px');
    const workingAreaHeight = (parseInt(column.Y, 10) + 'px');
    const workRight = (parseInt(column.X, 10) - parseInt(column.totalVal, 10) + 'px');
    const workHt = (parseInt(column.Y, 10) + 'px');
    const num = [];
    for (let i = 0; i < 3; i++) {
        num[i] = console.log(`Root Document: \n`);
        num[i] = console.log(`X = ${ doc.X } Y = ${ doc.Y } header = ${ doc.header } sidebar = ${ doc.sidebar }`);
        num[i] = console.log('Boundaries: ');
        num[i] = console.log(`LEFT = ${ doc.boundary.left } RIGHT = ${ doc.boundary.right } TOP = ${ doc.boundary.top } BOTTOM = ${ doc.boundary.bottom } WIDTH = ${ doc.boundary.width } HEIGHT = ${ doc.boundary.height }`);
        num[i] = console.log('Working Area: ');
        num[i] = console.log(`Width = ${ column.X } Height = ${ column.Y }`);
        num[i] = console.log('Work Boundaries: ');
        num[i] = console.log(`LEFT = ${ (parseInt(column.X, 10) * 0.25) + 'px' } RIGHT = ${ form.totalMrg } TOP = ${ form.totalMrg } BOTTOM = ${ form.totalMrg } WIDTH = ${ form.totalVal } HEIGHT = ${ form.totalVal }`);
        return `${ num[0] } \n ${ num[1] } \n ${ num[2] }`;
    }
};

const head = {
    el: document.querySelector('#main'),
    get Y () {
        return getComputedStyle(head.el).height;
    },
};
const side = {
    el: document.querySelector('div.sidebar'),
    get X () {
        return getComputedStyle(side.el).width;
    },
};
const adjHeight = getComputedStyle(chat.el).height;
const adjWidth = getComputedStyle(msg.el).width;
const optLWidth = getComputedStyle(opt.left.el).width;
const optMWidth = getComputedStyle(opt.middle.el).width;
const optRWidth = getComputedStyle(opt.right.el).width;

$(function () {
    $(resizer).draggable({
        containment: "div.resize-area"
    });
});
// Make the DIV element draggable:
dragElement(resizer);

function dragElement (elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, lastX = 0;
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
        let boundArea = form.el.parentElement.getBoundingClientRect();
        let maxX = boundArea.width - form.el.offsetWidth;
        let maxY = boundArea.height - form.el.offsetHeight;

        // set the el's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        // Adjust the input areas accordingly
        chat.el.style.height = ((elmnt.offsetTop - pos2) - parseInt(head.Y, 10)) + "px";
        msg.el.style.width = ((elmnt.offsetLeft - pos1) - parseInt(side.X, 10)) + "px";
        msg.el.style.height = parseInt(form.Y, 10) - parseInt(chat.Y, 10) + "px";  // head.Y was originally chat

        // Adjust the option areas accordingly
        const msgWidthPercent = (parseInt(msg.el.style.width, 10) / parseInt(form.X, 10)) * 100;
        if (msgWidthPercent < 50) {
            opt.middle.el.style.width = `${ (msgWidthPercent - 65) * 2 }%`;
            opt.middle.el.style.height = '20%';
            opt.right.el.style.width = `${ (50 - msgWidthPercent) * 2 }%`;
            opt.right.el.style.height = '20%';
            opt.left.el.style.width = `${ 12.5 + ((msgWidthPercent - 25) / 2) }%`;
            opt.left.el.style.height = '20%';
            console.log(opt.left.el.style.width);
        } else if (msgWidthPercent >= 50 && msgWidthPercent < 65) {
            opt.middle.el.style.width = `${ (65 - msgWidthPercent) * 2 }%`;
            opt.middle.el.style.height = '20%';
            opt.right.el.style.width = `${ (msgWidthPercent - 50) * 2 }%`;
            opt.right.el.style.height = '20%';
            opt.left.el.style.width = `${ 22.5 - (msgWidthPercent - 50) }%`;
            opt.left.el.style.height = '20%';
            console.log(opt.right.el.style.width);
        } else if (msgWidthPercent >= 65 && msgWidthPercent <= 81.5) {
            opt.middle.el.style.width = `${ (msgWidthPercent - 65) * 2 }%`;
            opt.middle.el.style.height = '20%';
            opt.right.el.style.width = '0%';
            opt.left.el.style.width = `${ 16.5 - (msgWidthPercent - 65) }%`;
            opt.left.el.style.height = '20%';
            console.log(opt.middle.el.style.width);
            console.log(opt.right.el.style.width)
        } else if (msgWidthPercent > 81.5 && msgWidthPercent <= 100) {
            opt.right.el.style.width = '0rem';
            opt.right.el.style.height = '0rem';
            opt.middle.el.style.width = '0rem';
            opt.middle.el.style.height = '0rem';
            opt.left.el.style.width = `${ (100 - msgWidthPercent) * 2 }%`;
            opt.left.el.style.height = '20%';
            console.log(opt.left.el.style.width);
            console.log(opt.middle.el.style.width);
            console.log(opt.right.el.style.width);
        } else {
            opt.right.el.style.width = '0rem';
            opt.right.el.style.height = '0rem';
            opt.middle.el.style.width = '0rem';
            opt.middle.el.style.height = '0rem';
            opt.left.el.style.width = '0rem';
            opt.left.el.style.height = '0rem';
            console.log(opt.left.el.style.width);
            console.log(opt.middle.el.style.width);
            console.log(opt.right.el.style.width);
        }
        console.log(msgWidthPercent);
    };

        // if (msg.X <= '49.99%' && msg.X >= '0%') {
        //     const initOptMiddle = opt.middle.el.style.width = 16 + '%';
        //     const initOptRight = opt.right.el.style.width = 16 + '%';

        //     opt.left.el.style.width = ((
        //         parseInt(form.X, 10) - parseInt(msg.X, 10)) - (
        //             parseInt(initOptLeft, 10) + parseInt(initOptRight, 10))) + "px";
        // }
        // function initOpt () {
        //     opt.left.el.style.width = 12.5 + '%';
        // };
        // if (msg.el.style.width < '70%' && msg.el.style.width >= '50%') {
        //     if (msg.X === '50%') {
        //         initOpt();
        //     };

        //     const initOptMiddle = opt.middle.el.style.width = 16 + '%';
        //     const initOptRight = opt.right.el.style.width = 16 + '%';

        //     opt.middle.el.style.width = ((
        //         parseInt(form.X, 10) - parseInt(msg.X, 10)) - (
        //             parseInt(initOptLeft, 10) + parseInt(initOptRight, 10))) + "px";

        //     opt.right.el.style.width = ((
        //         parseInt(form.X, 10) - parseInt(msg.X, 10)) - (
        //             parseInt(initOpt, 10) + parseInt(initOptMiddle, 10))) + "px";
        // }
        // if (msg.el.style.width >= '70%') {
        //     const initOptLeft = opt.left.el.style.width = 12.5 + '%';
        //     const initOptMiddle = opt.middle.el.style.width = 10.5 + '%';

        //     opt.right.el.style.width = ((
        //         parseInt(form.X, 10) - parseInt(msg.X, 10)) - (
        //             parseInt(initOpt, 10) + parseInt(initOptMiddle, 10))) + "px";
        // }
    function closeDragElement () {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        // remove the resizing attribute
    }
};
const resetBtn = document.getElementById('resizeReset');
resetBtn.addEventListener('click', (dbl) => {
    msg.el.style.width = 50 + '%';
    chat.el.style.height = 80 + '%';
    resizer.style.top = 81.60 + '%';
    resizer.style.left = 50 + '%';
});

// const resizer = {
//     el: document.getElementById('resizeIt'),
//     get X () {
//         return window.getComputedStyle(messageArea).width;
//     },
//     get Y () {
//         return window.getComputedStyle(inp).height;
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
            rootElement.setProperty('--height', resizedHeight.height);
            rootElement.setProperty('--msgwidth', resizedWidthOne.width);
            resizedHeight.setProperty('height', resizedHeight.height);
            // resizedWidthTwo.setProperty(property, value)
        }

    } else {
    return
    }
}
function init () {
    resizer = document.getElementById('resizeIt');
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



