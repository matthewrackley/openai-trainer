const crypto = require('crypto');

async function keyGen (identifier, type) {
    return new Promise((resolve, reject) => {
        crypto.generateKey(type, { length: 256 }, (err, key) => {
            if (err) {
                console.error(err);
                throw err;
            }
            const keyPart = identifier;
            const valuePart = key.export().toString('hex');
            const keyValuePair = { [keyPart]: valuePart };
            return resolve(keyValuePair);
        });
    });
};
const gen = {
    async key (key, type = undefined) {
        if (type !== ('hmac' || 'aes' || undefined)) {
            console.log(`Invalid key type. Dipshit. Must be of type 'hmac' or 'aes'.`)
            return;
        }
        if (type === undefined) {
            return await keyGen(key, 'hmac');
        }
        if (type === 'hmac' || 'aes') {
            return await keyGen(key, type);
        }
    },
    nonce () {
        let nonce = crypto.getRandomValues(new Uint8Array(32))
            .join('')
            .replace(/\//g, '_');
        return nonce;
    },
    sec: {
        value (request) {
            switch (request) {
                case 'cookie':
                    let cookie = gen.nonce();
                    return cookie;
                case 'css':
                    let css = gen.nonce();
                    return css;
                case 'script':
                    let script = gen.nonce();
                    return script;
                default:
                    let nonce = gen.nonce();
                    console.error('Invalid request. Returning nonce instead.');
                    return nonce;
            }
        },
    },
};

module.exports = { gen };
