const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = req.url === '/' ? 'index.html' : req.url.substring(1);
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    if (req.method === 'POST' && req.url === '/mensagem') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { mensagem } = JSON.parse(body);
            console.log('Mensagem recebida:', mensagem);

            fs.readFile('mensagens.json', (err, data) => {
                let mensagens = [];
                if (!err) {
                    mensagens = JSON.parse(data);
                }
                mensagens.push({ mensagem, timestamp: new Date() });
                fs.writeFile('mensagens.json', JSON.stringify(mensagens, null, 2), err => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Erro ao salvar a mensagem');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Mensagem recebida pelo servidor!');
                });
            });
        });
    } else {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("404 Not Found");
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            }
        });
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
