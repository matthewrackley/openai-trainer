/**
 *  @author Matthew Rackley
 *  @email matthew.rackley17@gmail.com
 *  @date 2023-04-21
 *  @name cookies.js
 *  @module events/cookies.js
 *  @description Provides a mini-library for creating cookies
 *  @param {string} key - The name of the cookie
 *  @param {string} value - The value of the cookie
 *  @param {object} age - The age of the cookie
 *  @param {string} age.count - The number of terms
 *  @param {string} age.term - The term of the count
 *      - seconds
 *      - minutes
 *      - hours
 *      - days
 *      - weeks
 *      - months
 *  @param {object} security - The security of the cookie
 *  @param {string} security.domain - The domain of the cookie
 *  @param {string} security.path - The path of the cookie
 *  @param {string} security.type - The type of security
 *      - basic
 *      - tracking
 *      - crossOrigin
 *      - sameSite
 *      - externalApi
 *      - internalApi
 *      - hashed
 *      - insecure
 *      - custom
 *  @returns {string} - The cookie string
 *  @example create.cookie('test', 'test', { count: 1, term: 'day' }, { type: 'basic', domain: 'localhost', path: '/' });
 *  @example create.cookie('test', 'test', { count: 2, term: 'days' }, { type: 'hashed', domain: 'localhost', path: '/' });
 *  @example create.cookie('test', 'test', { count: 3, term: 'weeks' }, { type: 'externalApi', domain: 'localhost', path: '/' });
 *  @example create.cookie('test', 'test', { count: 4, term: 'months' }, { type: 'internalApi', domain: 'localhost', path: '/' });
 *  @example create.cookie('test', 'test', { count: 6, term: 'day' }, { type: 'sameSite', domain: 'localhost', path: '/' });
 *  @example create.cookie('test', 'test', { count: 12, term: 'month' }, { type: 'tracking', domain: 'localhost', path: '/' });
 *  @example create.cookie('test', 'test', { count: 6, term: 'hours' }, { type: 'crossOrigin', domain: 'localhost', path: '/' });
 *  @example create.cookie('test', 'test', { count: 18, term: 'days' }, { type: 'insecure', domain: 'localhost', path: '/' });
 */
const { gen } = require('../events/hashGen.js');
const setSecurity = {
    basic: () => 'HttpOnly; SameSite=Lax; Secure',
    tracking: () => 'SameSite=None; Secure',
    crossOrigin: () => 'HttpOnly; SameSite=None; Secure',
    sameSite: (domain, path) =>
        `HttpOnly; SameSite=Strict; Secure; Domain=${ domain }; Path=${ path }`,
    externalApi: (domain, path) =>
        `HttpOnly; SameSite=None; Secure; Domain=${ domain }; Path=${ path }`,
    internalApi: (domain, path) =>
        `HttpOnly; SameSite=Strict; Secure; Domain=${ domain }; Path=${ path }`,
    hashed: async (value) => {
        return await gen.key(value, 'hmac');
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
                return setSecurity.sameSite(domain, path);
            case 'externalApi':
                return setSecurity.externalApi(domain, path);
            case 'internalApi':
                return setSecurity.internalApi(domain, path);
            case 'hashed':
                return setSecurity.hashed(value);
            case 'insecure':
                return setSecurity.insecure();
            default:
                return setSecurity.hashed(type);
        }
    },
};

// Sets the domain attr of the cookie
const setDomain = (domain = 'localhost') => domain;

// Sets the path attr of the cookie
const setPath = (path = '/') => path;


// Sets the Max-Age attr of the cookie
function setAge (count = 1, term = '86400') {
    var seconds = 1;
    var minutes = 60;
    var hours = 3600;
    var days = 86400;
    var weeks = 604800;
    var months = 2592000;
    var years = 31536000;
    switch (term) {
        case 'second':
        case 'seconds':
            var time = count * seconds;
            return 'Max-Age=' + time;
        case 'minute':
        case 'minutes':
            var time = count * minutes;
            return 'Max-Age=' + time;
        case 'hour':
        case 'hours':
            var time = count * hours;
            return 'Max-Age=' + time;
        case 'day':
        case 'days':
            var time = count * days;
            return 'Max-Age=' + time;
        case 'week':
        case 'weeks':
            var time = count * weeks;
            return 'Max-Age=' + time;
        case 'month':
        case 'months':
            var time = count * months;
            return 'Max-Age=' + time;
        case 'year':
        case 'years':
            var time = count * years;
            return 'Max-Age=' + time;
        case undefined:
            var time = count * term;
            return 'Max-Age=' + time;
        default:
            var time = 6 * hours;
            return 'Max-Age=' + time;
    };
};
// Handles the options for the cookie
const handler = (key, val, ...options) => {
    const opt = { // defines the default options
        term: 'day',
        domain: 'localhost',
        path: '/',
    };

    // defines how to handle the key
    if (key === 'age') { // When the key is age, only look for opt.term value
        opt.term = options[0] || opt.term;
    }

    if (key === 'security') { // When the key is security, only look for opt.domain and opt.path values
        opt.domain = options[0] || opt.domain;
        opt.path = options[1] || opt.path;
    }

    switch (key) {
        case 'security': // When the key is security, handle it this way
            switch (val) {
                case 'basic':
                case 'tracking':
                case 'crossOrigin':
                case 'insecure':
                case undefined: // If val === any of the above, or undefined
                    return setSecurity.level(val); // return the security level === val
                case 'externalApi':
                case 'internalApi':
                case 'sameSite': // If val === any site specific options
                    const [domain, path] = [opt.domain, opt.path]; // define the domain and path
                    return setSecurity.level(val, '', domain, path); // return the security level === val with the domain and path
                default: // default to a hashed key
                    return setSecurity.level('hashed', val);
            }
        case 'age': // When the key is age
            return setAge(val, opt.term); // return the age with the term
        case 'domain': // When the key is domain
            return setDomain(val); // return the domain
        case 'path': // When the key is path
            return setPath(val); // return the path
        default: // If the key passed is an invalid option
            console.error('Invalid cookie option.'); // log an error
    }
};

// Create the cookie
function genCookie (key, value, age = { count: 1, term: 'days' }, security = { type: 'basic', domain: 'localhost', path: '/' }, hashed = false) {
    const { count, term } = age; // destructure the age object
    const { type, domain, path } = security; // destructure the security object
    if (hashed === true) { // If hashed === true, hash the value
        return new Promise(async(resolve, reject) => {
            const hashedKey = await setSecurity.hashed(value);
            if (hashedKey) {
                resolve(hashedKey);
            } else {
                reject('Error hashing key.');
            }
            const cookieStr = `${ key }=${ encodeURIComponent(hashedKey) }; ${ handler(
                'age',
                count,
                term
            ) }; ${ handler(
                'security',
                type,
                domain,
                path
            ) }`;
            return cookieStr;
        });
    } else { // If hashed === false, just provide a key value pair
        const cookieStr = `${ key }=${ encodeURIComponent(value) }; ${ handler(
            'age',
            count,
            term
        ) }; ${ handler(
            'security',
            type,
            domain,
            path
        ) }`;
        return cookieStr;
    };
};

/**
 *  3 examples:
 *  genCookie('test', 'value', { count: 1, term: 'days' }, { type: 'basic', domain: 'localhost', path: '/' })
 *  test=value; Max-Age=86400; HttpOnly; SameSite=Lax; Secure
 *  cookie('test', 'test', { count: 1, term: 'days' }, { type: 'basic', domain: 'localhost', path: '/' });
 *  cookie('test', 'test', { count: 1, term: 'days' }, { type: 'basic', domain: 'localhost', path: '/' });
 *
 *
 *
 */
module.exports = { genCookie };
