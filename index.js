const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//const host = "79.116.129.168";
const port = '8080';

var SLED = "";

app.get('/', (req, res)=>{
    res.writeHead(200, {"Content-type": "text/html"});
    const html = fs.readFileSync(__dirname + '/info.html', 'utf-8');
    res.end(html);
});

app.post('/', (req, res)=>{
    res.send('POST esp32!');
});

app.put('/', (req, res)=>{
    res.send('PUT esp32!');
});

app.delete('/', (req, res)=>{
    res.send('DELETE esp32!');
});

app.listen(port, ()=>{
    console.log('Start app in port: ${port}.')
});