const http = require('http');
const fs = require('fs');
const path = require('path');

let stocks = [
    { ticker: 'AAPL', name: 'Apple Inc.', price: 175.50 },
    { ticker: 'MSFT', name: 'Microsoft Corp.', price: 420.20 },
    { ticker: 'NVDA', name: 'NVIDIA Corp.', price: 875.00 },
    { ticker: 'BTC', name: 'Bitcoin', price: 64250.00 }
];

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Erro ao carregar index.html');
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
    } 

    else if (req.url === '/stream') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*'
        });

        res.write(`data: ${JSON.stringify(stocks)}\n\n`);

        const intervalId = setInterval(() => {
            stocks = stocks.map(stock => {
                // Variação entre -1.5% e +1.5%
                const changePercent = (Math.random() * 3 - 1.5) / 100;
                const newPrice = stock.price * (1 + changePercent);
                return {
                    ...stock,
                    price: parseFloat(newPrice.toFixed(2)),
                    change: changePercent >= 0 ? 'up' : 'down'
                };
            });

            res.write(`data: ${JSON.stringify(stocks)}\n\n`);
        }, 1500);

        req.on('close', () => {
            clearInterval(intervalId);
            res.end();
        });
    } 
    else {
        res.writeHead(404);
        res.end('Não encontrado');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
