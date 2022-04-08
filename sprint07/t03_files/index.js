const express = require('express')
const File = require('./File.js');
const FileList = require('./FileList.js');
const path = require('path')
const fs = require('fs')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const HOST = 'localhost'
const PORT = 3000


app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
})

app.post('/', (req, res) => {
    if(req.body.filename && req.body.content) {
        const file = new File(req.body.filename)
        file.write(req.body.content);
        res.redirect('/')
    } else {
        res.redirect('/')
    }
})

app.get('/files', (req, res) => {
    const fileList = new FileList()
    if(fileList.hasFiles)
        res.json({html: fileList.getHTMLList()});
})

app.get('/show', (req, res) => {
    //console.log(typeof req.query.file);
    const data = fs.readFileSync(`tmp/${req.query.file}`, 'utf-8');
    res.json({content: data, name: req.query.file});
});

app.get('/delete', (req, res) => {
    //console.log(typeof req.query.file);
    fs.rmSync(`tmp/${req.query.file}`);
    const fileList = new FileList()
    if(fileList.hasFiles)
        res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})