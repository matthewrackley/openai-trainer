const http = require('http');
const hG = require('../events/hashGen.js');
const { Hash } = require('crypto');
let baseURIs = [
    'subscriptions',
    'camming',
    'customs',
    'albums',
    'store',
    'contact',
    'services',
    'trans',
    'men',
    'women',
    'models',
    'settings',
    'modeling',
    'forums',
    'account',
    'creators',
    'support',
    'values',
    'mission',
    'about',
    'home'
];

let func = [{
    loadMod: (mod) => {
        // handle mod loading here
    },
    who: function (user) {
        if (user === undefined) {
            func.access.format = 'register';
        } else {
            return 'login';
        }
    },
    access: (user) => {
        if (http.validateHeaderValue(userLoggedIn, 'true' + '===' + userHash(U.User.username))
        format: [
            'login',
            'logout',
            'register',
        ],
        while (format === )  {
            if (user === undefined) {
            let format = 'register';
            [
            'login',
            'logout',
            'register',
            ],

        }  => {
            // handle login here
        }
    },
    request) => {
        // handle login here
    },

    logout: (request) => {
}];


export default class {

    constructor (server, script) {
        this.url = server;
        this.handler = script;
    };
    gen = {
        defaultUri (uri) {
            let url = this.url;
            let redirectURI = [uri];
            while (baseURIs[0] !== uri) {
                try {
                    baseURIs.shift();
                } catch (err) {
                    console.error(err);
                }
            };
            if (baseURIs[0] !== uri) {
                console.log('URI not found in baseURIs array.');
                return;
            }
            if (baseURIs[0] === uri) {
                let redirectURI = url + baseURIs[0];
                if (url instanceof String) {
                    if (!url.endsWith('/')) {
                        let redirectURI = url + '/' + baseURIs[0];
                        return redirectURI;
                    }
                    if (url.endsWith('/')) {
                        let redirectURI = url + baseURIs[0];
                        return redirectURI;
                    }
                } else {
                    console.error('URL not a string.');
                    return;
                }
            };
        },
        customURI (uri) {
            let url = this.url;
            if (url instanceof String && uri instanceof String) {
                if (!url.endsWith('/') && uri.match('/^(\.{0,2}\/){1,3}/')) {
                    let redirectURI = url + '/' + uri.replace('/^(\.{0,2}\/){1,3}//g', '');
                    return redirectURI;
                }
                if (!url.endsWith('/') && uri.match('/^(\.{0,2}\/){1,3}/')) {
                    let redirectURI = url + uri.replace('/^(\.{0,2}\/){1,3}//g', '');
                    return redirectURI;
                }
                if (!url.endsWith('/') && !uri.match('/^(\.{0,2}\/){1,3}/')) {
                    let redirectURI = url + '/' + uri
                    return redirectURI;
                } else {
                    console.error('URL not a string.');
                    return;
                };
            };
        }
    };
};
