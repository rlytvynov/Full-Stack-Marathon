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
            '.css':'text/css'
        };

        let contentType = mimeTypes[extname] || 'application/octet-stream';

        res.setHeader('Content-Type', contentType)
        if(filePath !== './favicon.ico') {
            fs.readFile(filePath, (err, data) => {
                if(err) {
                    console.log('Info has been gotten!')
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
            res.end(JSON.stringify(
            {
                'name': responseJson.name,
                'email': responseJson.email,
                'age': responseJson.age,
                'bio': responseJson.bio,
                'photo': responseJson.photo
            }));
        });
    }
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Server link http://localhost:${PORT}`)
});
