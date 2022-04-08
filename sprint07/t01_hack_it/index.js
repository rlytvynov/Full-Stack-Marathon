const express = require('express')
const session = require('express-session')
const path = require('path')
const bcrypt = require("bcrypt");
const { redirect } = require('express/lib/response');

const app = express()

const HOST = 'localhost'
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'you secret key',
    saveUninitialized: true,
    resave: true
  })
)

let sess;
app.get("/", (req, res) => {
    if (req.session.password) { //show hash

    } else if(!req.session.password){ //show main page
        res.sendFile(path.resolve('begin.html'))
    }
});
app.post('/', (req, res) => {
    req.session.password = req.body.password
    req.session.number = req.body.number
    req.session.hash = bcrypt.hashSync(req.session.password, bcrypt.genSaltSync(parseInt(req.session.number)));
    res.redirect('/guess')
})
app.get('/guess', (req, res) => {
    if(req.session.password) {
        res.send(`<h1>Password</h1>
        <form action="/check" method="POST" >
            <p>Password saved at session.</p>
            <p>Hash is ${req.session.hash}</p>
            <p> 
                Try to guess: <input type="text" name="text" placeholder="Password to session">
                <button type="submit">Check password</button>
            </p>
        </form>
        <button onclick="location.href='/logout'">Clear</button>
        `)
    }
})
app.post('/check', (req, res) => {
    req.session.text = req.body.text
    if(req.session.password) {
        if(bcrypt.compareSync(req.session.text, req.session.hash)) {
            req.session.hacked = true
            req.session.destroy(err => {
                if(err){
                    return console.log(err)
                }
            })
            res.send(`<h1>Password</h1>
            <h2 style="color:green">Hacked!</h2>
            <form action="/" method="POST" >
                <p>Password not saved at session.</p>
                <p>Password for saving to session
                    <input type="password" name="password" placeholder="Password to session">
                </p>
                <p>Salt for saving to session<input type="number" name="number" placeholder="Salt to session"></p>
                <button type="submit">Save</button>
            </form>
            <button onclick="location.href='/logout'">Clear</button>
            `)

        } else {
            res.send(`<h1>Password</h1>
            <h2 style="color:red">Access denied!</h2>
            <form action="/check" method="POST" >
                <p>Password saved at session.</p>
                <p>Hash is ${req.session.hash}</p>
                <p>
                    Try to guess:<input type="text" name="text" placeholder="Password to session">
                    <button type="submit">Check password</button>
                </p>
            </form>
            <button onclick="location.href='/logout'">Clear</button>
            `)
        }
    } else {
        res.redirect('/')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err){
            return console.log(err)
        }
    })
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})