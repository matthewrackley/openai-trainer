const crypto = require('crypto');

module.exports = {
    async keyGen () {
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
};
