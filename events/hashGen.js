const U = require('../classes/User');
const crypto = require('crypto');

async function keyGen (type, identifier) {
    if (type !== 'hmac' || 'aes') {
        return;
    }
    if (type === 'hmac' || 'aes') {
        return new Promise((resolve, reject) => {
            crypto.generateKey(type, { length: 256 }, (err, key) => {
                if (err) {
                    console.error(err);
                    throw err;
                }
                const keyPart = identifier
                const valuePart = key.export().toString('hex');
                const keyValuePair = {
                    [keyPart]: valuePart
                };
                return resolve(keyValuePair);
            });
        });
    };
};
const gen = {
    async key (type, key) {
        if (type !== 'hmac' || 'aes') {
            return;
        }
        if (type === 'hmac' || 'aes') {
            const value = await keyGen(type, key)
            return value;
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
        key: (type, identifier) =>  {
            let { [identifier]: key } = gen.sec.key(type, identifier);
            return ({ identifier: key });
        },
    },
    elements: function (method) {
        if (method !== 'css' && method !== 'script') {
            return;
        }
        if (method === 'css') {
            const css = gen.sec.value('css');
            document.createAttribute('nonce').value = css;
            document.querySelectorAll('link[href]')
                .forEach((el) => {
                    el.setAttribute('nonce', css);
                });
            return css;
        }
        if (method === 'script') {
            const script = gen.sec.value('script');
            const scriptNonce = document.createAttribute('nonce').value = script;
            document.querySelectorAll('*[nonce]:not(link[href])')
                .forEach((el) => {
                    el.setAttribute('nonce', script);
                });
            return scriptNonce;
        };
    },
};
const headers = {
    http: 'http-equiv',
    cspV: 'Content-Security-Policy',
    content: 'content',
    source: `default-src 'self'; style-src fonts.gstatic.com fonts.googleapis.com 'self' 'unsafe-inline' 'nonce-${ gen.elements('css')
        }'; font-src fonts.gstatic.com fonts.googleapis.com; script-src 'self' 'nonce - ${ gen.elements('script') } ' 'strict - dynamic';`,
    xAttr: 'Content-Type-Options',
    xAttrV: `text/html; nosniff;`,
    cookie: 'Set-Cookie',
    cookieV: gen.sec.value('cookie'),
};
const csp = {
    id: document.getElementById('CSP'),
    set: (attr, data) => {
        csp.id.setAttribute(attr, data);
    },
    apply: {
        basic: () => {
            document.cookie = `basicTracker=${ encodeURIComponent(gen.sec.key('hmac', 'UserTracker')) }; HttpOnly; SameSite=lax; Secure;`;
            csp.set(headers.http, headers.pol);
            csp.set(headers.cont, headers.src);
            csp.set(headers.xattr, headers.xval);
        },
    }
};


module.exports = { keyGen, gen, headers, csp };
