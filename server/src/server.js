const express = require('express');
const path = require('path');
const si = require('systeminformation');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

function enviarEvento(res, tipo, dados, id){
    if(id) res.write(`id: ${id}\n`);

    if(tipo) res.write(`event: ${tipo}\n`);

    res.write(`data: ${JSON.stringfy(dados)}\n\n`);
}

function getHardwareInfo

app.get('/events', (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.flushHeaders();

    console.log('Cliente conectado');

    const cpuInfo = () => {
        enviarEvento(red, 'cpu', {
            
        })
    }; 
});