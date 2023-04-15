//** ====================================================== //
//** -- INFO -- Cookies and their possible attributes       //
//** ====================================================== //
/** ; domain = domain-- the host to which the cookie will be sent
 *  ;expires=date -- the maximum lifetime of the cookie as a date
 *  ;max-age=max-age-in-seconds -- the max life of cookie in seconds
 *  ;partitioned -- Cookie will be stored in partitioned storage
 *  ;path=path -- the path to which the cookie will be sent
 *  ;samesite -- the cookie will only be sent with a same-site request
 *      lax -- CSFR blocking, GET, sufficient for user tracking
 *     strict -- ALL cross site blocked
 *      none -- ALL cross site allowed
 *  ;secure -- the cookie will only be sent with an encrypted request
 *               over the HTTPS protocol
 *  encodeURIComponent() -- encodes cookie URI component for passing
 *  some browsers allow "__Secure-" and "__Host-" prefix for secure cookies
 *  __Secure- -- Cookie can only pass on secure connections
 *  __Host- -- Above + must have path=/ and no domain(host only)
//*========================================================= **/

const { gen } = require('../events/hashGen.js');
const setSecurity = {
    basic: () => {
        return 'HttpOnly ;SameSite=Lax ;Secure';
    },
    tracking: () => {
        return 'SameSite=none ;Secure';
    },
    crossOrigin: () => {
        return 'HttpOnly ;SameSite=None ;Secure';
    },
    sameSite: (domain) => {
        return `HttpOnly ;SameSite=Strict ;Secure ;Domain=${ domain }`;
    },
    externalApi: (domain, path) => {
        return `HttpOnly ;SameSite=None ;Secure ;Domain=${ domain }; Path=${ path }`;
    },
    internalApi: (domain, path) => {
        return `HttpOnly ;SameSite=Strict ;Secure ;Domain=${ domain }; Path=${ path }`;
    },
    hashed: (value) => {
        const secureHash = gen.sec.key('hmac', value);
        return { value: secureHash };
    },
    insecure: () => {
        console.error('Insecure cookie created. This is not recommended.');
        return 'SameSite=None';
    },
    level: (type, value = undefined, domain = undefined, path = undefined) => {
        switch (type) {
            case 'basic':
                return setSecurity.basic();
            case 'tracking':
                return setSecurity.tracking();
            case 'crossOrigin':
                return setSecurity.crossOrigin();
            case 'sameSite':
                return setSecurity.sameSite();
            case 'externalApi':
                return setSecurity.externalApi(domain, path);
            case 'internalApi':
                return setSecurity.internalApi(domain, path);
            case 'hashed':
                if (value === undefined) {
                    let value = name;
                }

                return setSecurity.hashed(value);
            case 'insecure':
                return setSecurity.insecure();
            case undefined:
                return setSecurity.basic();
            default:
                return setSecurity.hashed(type);
        }
    },
};

function age (count = 1, term = undefined) {
    var second = 1;
    var seconds = 1;
    var minute = 60;
    var minutes = 60;
    var hour = 3600;
    var hours = 3600;
    var day = 86400;
    var days = 86400;
    var week = 604800;
    var weeks = 604800;
    var month = 2592000;
    var months = 2592000;
    var year = 31536000;
    var years = 31536000;
    if (term === undefined) {
        term = day;
        return term;
    }
    switch (term) {
        case second || seconds:
            var time = count * seconds;
            return time;
        case minute || minutes:
            var time = count * minutes;
            return time;
        case hour || hours:
            var time = count * hours;
            return time;
        case day || days:
            var time = count * days;
            return time;
        case week || weeks:
            var time = count * weeks;
            return time;
        case month || months:
            var time = count * months;
            return time;
        case year || years:
            var time = count * years;
            return time;
        case undefined:
            var time = count * term;
            return time;
        default:
            var time = 6 * hours;
            return time;
    };
};
function handler(option, key, value = undefined) {
    var name = name;
    var value = value;
    const optKey = Object.keys(key);
    const optVal = Object.values(value);
    const optLen = optKey.length;
    for (let i = 0; i < optLen; i++) {
        switch (optKey[i]) {
            case 'days':
                var days = optVal[i];
                break;
            case 'security':
                var security = optVal[i];
                break;
            case 'domain':
                var domain = optVal[i];
                break;
            case 'path':
                var path = optVal[i];
                break;
            default:
                console.error('Invalid cookie option.');
                break;
        };
        console.log(optKey[i]);
        console.log(optVal[i]);
        console.log(optLen);
        switch (optKey[security]) {
            case 'basic':
                security = setSecurity.level('basic');
                break;
            case 'tracking':
                security = setSecurity.level('tracking');
                break;
            case 'crossOrigin':
                security = setSecurity.level('crossOrigin');
                break;
            case 'sameSite':
                security = setSecurity.level('sameSite', domain);
                break;
            case 'externalApi':
                security = setSecurity.level('externalApi', domain, path);
                break;
            case 'internalApi':
                security = setSecurity.level('internalApi', domain, path);
                break;
            case 'hashed':
                security = setSecurity.level('hashed', name);
                break;
            case 'insecure':
                security = setSecurity.level('insecure');
                break;
            case undefined:
                security = setSecurity.level('basic');
                break;
            default:
                security = setSecurity.level('hashed', optVal[i]);
                break;
        }
        console.log(optKey[security]);
        console.log(optVal[security]);
        console.log(optLen[security]);
        switch (optKey[age(optKey[i], ))]) {
            case 'day':
                days = time('day');

    };

            value, days, security
    options(optKey[i]) = {
        [name]: name,
        [value]: value,
        [days]: days,
        [security]: this.security,
    };
    (name, value) security => {
    switch (security) {
        case 'basic':
            if (security === undefined) {
                security = setSecurity.level('basic');
                return security;
            };
            if (security === 'hashed') {
                security = setSecurity.level(security, name);
                return security;
            };
            security = setSecurity.level(security);
            return security;
    };
});

    if (days === undefined) {

        var cookieHeader = `${ name }=${ encodeURIComponent(value) }; ${ security }`;
    }
});
};
}

const create = {
    cookie: {
        custom: (name, value, days = undefined, security) => {
            if (security === 'hashed') {
                var hashedKey = setSecurity.hashed(name);
            } else {
                security = '';
                var securityLevel = setSecurity.level(security);
            }

            security = setSecurity.level(security);
            if (days === undefined) {
        },
        }, value, days, security = undefined ) =>
            (security = setSecurity.level(security), {
                let { [name]: value } = setSecurity.hashed(name);
                [value] = JSON.stringify({ [name]: value });
                switch (value && security) {
                    case (security === 'hashed'):
            }
        })) => {

            if (days === undefined) {
                document.cookie = `${ name }=${ encodeURIComponent(value) }; ${ setSecurity.level(security) }`;
                var cookieHeader = `${ name }=${ encodeURIComponent(value) }; ${ setSecurity.level(security) }`;
            } else {
                document.cookie = `${ name }=${ encodeURIComponent(value) }; max-age=${ time(days) }; ${ setSecurity.level(security) }`;
                var cookieHeader = `${ name }=${ encodeURIComponent(value) }; max-age=${ time(days) }; ${ setSecurity.level(security) }`;
            };
            return cookieHeader;
        },
        sameSite: (name, value, days = undefined) => {
            var { [name]: hashedKey } = setSecurity.hashed(name);
            if (days === undefined) {
                document.cookie = `${ name }=${ encodeURIComponent(setSecurity.hashed(value)) }; ${ setSecurity.sameSite }`;
                var cookieHeader = `${ name }=${ encodeURIComponent(setSecurity.hashed(value)) }; ${ setSecurity.sameSite }`;
            } else {
                document.cookie = `${ name }=${ encodeURIComponent(setSecurity.hashed(value)) }; max-age=${ time(days) }; ${ setSecurity.sameSite }`;
                var cookieHeader = `${ name }=${ encodeURIComponent(setSecurity.hashed(value)) }; max-age=${ time(days) }; ${ setSecurity.sameSite }`;
            };
            return cookieHeader;
        },
        crossOrigin: (name, value, days = undefined) => {
            var { [name]: hashedKey } = setSecurity.hashed(name);
            if (days === undefined) {
                document.cookie = `${name}=${encodeURIComponent(setSecurity.level('hashed', value))} ;${ setSecurity.crossOrigin }`;
                var cookieHeader = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) } ;${ setSecurity.crossOrigin }`;
                return cookieHeader;
            }
            document.cookie = `${name}=${encodeURIComponent(setSecurity.level('hashed', value))} ;max-age=${ time(days) }; ${ setSecurity.crossOrigin }`;
            var cookieHeader = `${name}=${encodeURIComponent(setSecurity.level('hashed', value))} ;max-age=${ time(days) }; ${ setSecurity.crossOrigin }`;
            return cookieHeader;
        },
        tracking: (name, value, days = undefined) => {
            var { [name]: hashedKey } = setSecurity.hashed(name);
            if (days === undefined) {
                document.cookie = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) }; ${ setSecurity.tracking }`;
                var cookieHeader = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) }; ${ setSecurity.tracking }`;
                return cookieHeader;
            }
            document.cookie = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) }; max-age=${ time(days) }; ${ setSecurity.tracking }`;
            var cookieHeader = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) }; max-age=${ time(days) }; ${ setSecurity.tracking }`;
            return cookieHeader;
        },
        insecure: (name, value, days = undefined) => {
            var { [name]: hashedKey } = setSecurity.hashed(name);
            if (days === undefined) {
                document.cookie = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) }; ${ setSecurity.insecure }`;
                var cookieHeader = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) }; ${ setSecurity.insecure }`;
                return cookieHeader;
            };
            document.cookie = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) }; max-age=${ time(days) }; ${ setSecurity.insecure }`;
            var cookieHeader = `${ name }=${ encodeURIComponent(setSecurity.level('hashed', value)) }; max-age=${ time(days) }; ${ setSecurity.insecure }`;
            return cookieHeader;
        },

    },
    commandCookie: (name, security = undefined, command) => {
        function execute (name) {
            var { [name]: hashedKey } = setSecurity.hashed(name);
            if (!document.cookie.split('; ').find((row) =>
                row.startsWith(`${ name }`))) {
                name = document.cookie = `${ name }=${ encodeURIComponent(hashedKey) }; expires=Fri, 31 Dec 9999 23:59:59 GMT; ${ setSecurity.level(security) }`;
                command(name);
                return name;
            };
        };
        function clear(name) {
            name = document.cookie = `${ name }=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${ setSecurity.level(security) }`;
        };
    },
};
module.exports = {
    create,
    setSecurity,
};

