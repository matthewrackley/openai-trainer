const http = require('http');
const x = require('./gateway');
const { param } = require('jquery');
/**
 * Description placeholder
 * @date 4/14/2023 - 4:41:31 AM
 *
 * @type {"http://192.168.0.155"}
 */
const url = 'http://192.168.0.155';
/**
 * Description placeholder
 * @date 4/14/2023 - 4:41:31 AM
 *
 * @type {5500}
 */
const port = 5500;
/**
 * Description placeholder
 * @date 4/14/2023 - 4:41:31 AM
 *
 * @type {"/api/gateway.js"}
 */
const srvpath = '/api/gateway.js';
/**
 * Description placeholder
 * @date 4/14/2023 - 4:41:31 AM
 *
 * @type {"/index.html"}
 */
const clientpath = '/index.html';


/**
 * Description placeholder
 * @date 4/14/2023 - 4:41:31 AM
 *
 * @type {{ hostname: string; port: number; path: string; method: string; headers: { 'Content-Type': string; 'Set-Cookie': string; }; }}
 */
const getOptions = {
    hostname: url,
    port: port,
    path: srvpath,
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Set-Cookie': 'testCookie=abc123',
    },
};
/**
 * Description placeholder
 * @date 4/14/2023 - 4:41:31 AM
 *
 * @type {{ hostname: string; port: number; path: string; method: string; headers: { 'Content-Type': string; 'Set-Cookie': string; 'Content-Length': any; }; }}
 */
const postOptions = {
    hostname: url,
    port: port,
    path: clientpath,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': 'keycookie=value',
        'Content-Length': Buffer.byteLength(postData),
    },
};
/**
 * Description placeholder
 * @date 4/14/2023 - 4:41:31 AM
 *
 * @type {*}
 */
const postData = JSON.stringify({ param1: 'test1', param2: 'test2' });


//*========================================================================*//
//* INFO                GET Request to API Gateway example                 *//
//*========================================================================*//
/**
 *
const getRequest = http.request(getOptions, (res) => {
    const response = {
        method: 'GET',
        headers: {
            cookie: res.headers['set-cookie'],
        },
    };
    callApiGateway(response, res.headers['set-cookie']);
});
getRequest.on('error', (error) => {
    console.error(`GET request error: ${ error.message }`);
});
getRequest.end();
 *
 */

//*========================================================================*//
//* INFO                POST request to API Gateway example                *//
//*========================================================================*//
/**
const postData = JSON.stringify({ param1: 'test1', param2: 'test2' });

const postOptions = {
    hostname: '192.168.0.155',
    port: 5500,
    path: '/index.html',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': 'testCookie=abc123',
        'Content-Length': Buffer.byteLength(postData),
    },
};

const postRequest = http.request(postOptions, (res) => {
    const response = {
        method: 'POST',
        url: '/index.html',
        headers: {
            cookie: res.headers['set-cookie'],
        },
        on: (eventName, callback) => {
            if (eventName === 'data') {
                callback(postData);
            }
            if (eventName === 'end') {
                callback();
            }
        },
    };
    callApiGateway(response, res.headers['set-cookie']);
});

postRequest.on('error', (error) => {
    console.error(`POST request error: ${ error.message }`);
});

postRequest.write(postData);
postRequest.end();
 */
