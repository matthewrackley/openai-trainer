const hG = require('../events/hashGen.js');
const { AJAX } = require('../preload.js');

async function request (elementID, customURI = undefined) {
    // the URL of where we want to redirect the user to
    const redirection = AJAX.gen.customURI(customURI = elementID);
    // the URL of the server-side script that will handle the request
    const fullHandler = AJAX.url + AJAX.handler;
    document.getElementById(elementID).addEventListener("click", function (event) {
        event.preventDefault(); // prevent the default behavior of the link
        const xhr = new XMLHttpRequest(); // create a new AJAX request
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // handle the response from the server
                console.log(this.responseText);
            }
        };

        xhr.open('GET', fullHandler, true); // configure the AJAX request
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Set-Cookie', hG.gen.sec.value('cookie'));
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhr.send(); // send the AJAX request
    });
};
