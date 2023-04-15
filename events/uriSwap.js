const Ajax = require('./classes/Ajax.js');
const AJAX = new module.exports('http://192.168.0.1:5500', './api/gateway.js');
module.exports = {
    uriSwap: (docID) => {
        let Uri = AJAX.gen.defaultUri(docID);
        window.history.replaceState({}, 'unused', Uri);
        window.location.href = Uri;
        return Uri;
    },
}
