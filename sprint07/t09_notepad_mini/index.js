const express = require('express')
const Note = require('./Note.js');
const NotePad = require('./NotePad.js');
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
    if(req.body.name && req.body.importance && req.body.note) {
        const file = new Note(req.body.name)
        let date = new Date(Date.now())
        let result = `${date.getFullYear()}-${date.getMonth()<10?'0'+ date.getMonth():date.getMonth()}-${date.getDate()<10?'0'+ date.getDate():date.getDate()} 
        ${date.getHours()<10?'0'+ date.getHours():date.getHours()}:${date.getMinutes()<10?'0' + date.getMinutes():date.getMinutes()}:${date.getSeconds()<10?'0' + date.getSeconds():date.getSeconds()}`
        let data = `<ul><li>date: ${result}</li><li>name: ${req.body.name}</li><li>importance: ${req.body.importance}</li><li>text: ${req.body.note}</li></ul>`
        file.write(data);
        res.redirect('/')
    } else {
        res.redirect('/')
    }
})

app.get('/files', (req, res) => {
    const fileList = new NotePad()
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
    const fileList = new NotePad()
    if(fileList.hasFiles)
        res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})