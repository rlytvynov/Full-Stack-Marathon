let express = require('express')
let path = require('path')

let normal = require('./normal-router')
let quantum = require('./quantum-router')

const PORT = process.env.PORT ?? 3000
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
console.log(app.get('views'))


app.get('/', (req, res) => {
    res.render('router')
})
app.get('/normal', (req, res) => {
    res.render('normal',{time: normal.calculateTime()});
})
app.get('/quantum', (req, res) => {
    res.render('quantum',{time: quantum.calculateTime()});
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})