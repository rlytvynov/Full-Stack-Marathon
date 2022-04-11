let express = require('express')
let dataBase = require('./config.json')
let Heroes = require('./models/hero.js') 

let server = express()
const PORT = 3000;
const HOST = "localhost";


server.get('/', (req, res) => {
    res.send(router())
})

server.get('/find', async (req, res) => {
    let heroes = new Heroes()
    res.send(await heroes.find(15))
})

server.get('/save', async (req, res) => {
    let heroes = new Heroes()
    res.send(await heroes.save({id: 6, name: 'Bob', description: 'Dude', class_role: 'healer', race_id: 6}))
})

server.get('/delete', async (req, res) => {
    let heroes = new Heroes()
    res.send(await heroes.delete(12))
})

server.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
});

function router() {
    let result = '';
    result += `
    <a href="/find">find(id)</a>
    <a href="/delete">delete()</a>
    <a href="/save">save()</a>
    <a href="/all">all()</a>
    `;

    return result;
}