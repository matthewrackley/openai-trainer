const crypto = require('crypto');
const util = require('util');
const { request } = require('../api/LocalDB')
let secureKey;
module.exports = {
    keyGen: () => {
        return new Promise((resolve, reject) => {
            crypto.generateKey('hmac', { length: 256 }, (err, key) => {
                if (err) {
                    return reject(err);
                }
                const secureKey = key.export().toString('hex');
                resolve(secureKey);
            });
        });
    },
    GeneratedKey: function GeneratedKey (name) {
        module.exports.keyGen().then((secureKey) => {
            sessionStorage.setItem(`${ this.name }`, secureKey);
        }).catch((err) => {
            console.error(err);
        });
    },
};

const result = module.exports.keyGen().then((secureKey) => { return secureKey }).catch((err) => {
    console.error(err);
});

sessionStorage.setItem('uuid', this.id);
window.addEventListener("beforeunload", function (_event) {
    sessionStorage.removeItem('uuid');
});

console.log(util.inspect(result));
console.log(util.inspect(secureKey));
