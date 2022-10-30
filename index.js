const app = require('express');
//const fs = require('fs');
const path = require('path');

//const host = "127.0.0.1";
const port = '8080';
const pathDir = path.join('__dirname', '/');

app.get('/', (req, res)=>{
    res.send('hello esp32!');
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