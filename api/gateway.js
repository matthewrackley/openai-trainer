const http = require('http');
const U = require('../classes/User');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const server = http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '../') {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });

    request.on('end', () => {
      try {
        const { param1, param2 = undefined } = JSON.parse(body);

        U.execute(param1, param2);

        const responseData = { data: 'Success!' };
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(responseData));
      } catch (error) {
        response.writeHead(400, { 'Content-Type': 'text/plain' });
        response.end(`Invalid JSON: ${ error.message }`);
      }
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
app.post('/', (request, response) => {
  const { param1, param2 = undefined } = request.body;

  U.execute(param1, param2);

  const responseData = { data: 'Success!' };
  response.json(responseData);
});
