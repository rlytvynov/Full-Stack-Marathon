const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const server = http.createServer((req, res) => {
    
    if(req.method === 'GET') {
        let filePath = '.' + req.url;
        if (filePath == './') {
            filePath = './index.html';
        }
        let extname = String(path.extname(filePath)).toLowerCase();
        let mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/сss'
        };

        let contentType = mimeTypes[extname] || 'application/octet-stream';

        res.setHeader('Content-Type', contentType)
        if(filePath !== './favicon.ico') {
            fs.readFile(filePath, (err, data) => {
                if(err) {
                    console.log(err)
                    res.end()
                } else {
                    res.write(data)
                    res.end()
                }
            })
        }
    } else if (req.method === 'POST') {
        let buffer = '';
        req.on('data', chunk => {
            buffer += chunk;
        });
        req.on('end', () => {
            const responseJson = JSON.parse(buffer); 
            res.writeHead(200, "Content-Type: application/json");
            let response = 'false'
            if(responseJson.id === '3'){
                response = 'true'
            }
            res.end(JSON.stringify({'res':response}))
        });
    }
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Server link http://localhost:${PORT}`)
});
