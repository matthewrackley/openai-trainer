const http = require('http');
const e = require('../commands/message');
const hG = require('../events/hashGen');
const U = require('../classes/User');
const url = 'http://192.168.0.155:5500';
const RequestHandler = require('../classes/ReqHandler.js');



RequestHandler.callApiGateway();


http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === `${ url }/index.html`) {
    let body = '';
    let cookie = document.cookie = `nonce=${ encodeURIComponent(hG.gen.sec('cookie')) }; HttpOnly; SameSite=None; Secure;`;
    let hash = hG.keyGen();
    request.on('readable', () => {
      let chunk;
      while (null !== (chunk = request.read())) {
        body += chunk;
      }
    }).on('end', (ev) => {
      request.on('ev', () => {
      try {
        const { param1, param2 } = JSON.parse(body);

        e.message(param1, param2);
        module.exports = {
          param1,
          param2,
        }
      } catch (error) {
        response.writeHead(400, { 'Content-Type': 'text/plain', 'Set-Cookie': cookie });
        response.end(`Invalid JSON: ${ error.message }`);
      }
    }).on('close', HTTPRequestHandler => {
      )
    const responseData = { data: 'Success!' };
    response.writeHead(200, { 'Content-Type': 'application/x-www-form-urlencoded', 'Set-Cookie': cookie });
    response.end(JSON.stringify(responseData), 'utf8');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not found');
  }
});

class HTTPRequestHandler {
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
}

module.exports = {
  HTTPRequestHandler,
}
