/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const A = require('./classes/Ajax.js');
const showAlert = require('./events/showAlert.js');
const AJAX = new A.default('http://192.168.0.1:5500', './api/gateway.js');
const { genCookie } = require('./events/cookies.js');
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${ type }-version`, process.versions[type]);
    }



    const nonce = window.crypto.getRandomValues(new Uint8Array(32)).join('').replace(/\//g, '_');
    sessionStorage.setItem('nonce', nonce);
    window.addEventListener('beforeunload', function(event) {
        sessionStorage.removeItem('nonce');
    });

    const metaTag = document.createElement("meta");
    metaTag.nonce = nonce;
    document.head.appendChild(metaTag);

});
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
const mod = {
    timezone: timezone,
    AJAX: AJAX,
    showAlert: showAlert,
    genCookie: genCookie,
};
module.exports = mod;
