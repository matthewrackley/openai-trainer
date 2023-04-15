const express = require('express');
const app = express();
const url = 'http://192.168.0.155';
const port = 5500;
const srvpath = '/api/gateway.js';
const clientpath = '/index.html';


app.get('/', function (req, res) {
    res.send('Hello World');
})

const server = app.listen(5500, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
