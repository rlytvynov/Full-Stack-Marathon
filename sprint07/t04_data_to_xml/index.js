const express = require('express')
const path = require('path')
const {ListAvengerQuotes} = require('./ListAvengerQuotes');
const data = require('./arrayObjects');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const HOST = 'localhost'
const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
})

app.get('/toXML', (req, res) => {
    list = new ListAvengerQuotes(data);
    res.json({to: list.toXML('avenger_quote.xml'), from: list.fromXML('avenger_quote.xml')});
})

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})