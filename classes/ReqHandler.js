class ReqHandler {
    constructor () { }

    async handleGetRequest (response, cookie) {
        const { param1, param2 } = response; // Assuming response object contains param1 and param2.

        await fetch('http://192.168.0.155:5500/api/gateway.js', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Set-Cookie': cookie,
            },
            body: JSON.stringify({ param1, param2 }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Data submitted successfully');
                } else {
                    throw new Error(`Server returned an error: ${ response.status }`);
                }
            })
            .catch((error) => console.log('Fetch Error:', error));
    }

    async handlePostRequest (response, cookie) {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', async () => {
            try {
                const { param1, param2 } = JSON.parse(body);

                await fetch('http://192.168.0.155:5500/api/gateway.js', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Set-Cookie': cookie,
                    },
                    body: JSON.stringify({ param1, param2 }),
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log('Data submitted successfully');
                        } else {
                            throw new Error(`Server returned an error: ${ response.status }`);
                        }
                    })
                    .catch((error) => console.log('Fetch Error:', error));

            } catch (error) {
                console.error(error.message);
            }
            response.on('close', () => {
                console.log('Connection closed');
            });
        });
    }

    async callApiGateway (response, cookie) {
        if (response.headers['set-cookie'] && response.headers['set-cookie'].length > 0) {
            cookie = response.headers['set-cookie'][0];
            console.log(cookie);
        }

        if (response.method === 'POST' && response.url === '/index.html' && response.headers.cookie) {
            this.handlePostRequest(response, cookie);
        } else if (response.method === 'GET') {
            this.handleGetRequest(response, cookie);
        } else {
            response.on('error', (error) => {
                console.error(error.message);
            });
        }
    }
};

const RequestHandler = new ReqHandler();
module.exports = RequestHandler;
