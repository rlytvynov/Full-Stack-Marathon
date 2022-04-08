const express = require('express')
const session = require('express-session')
const path = require('path')
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

app.get('/', (req,res) => {
    if(req.session.name && req.session.alias && req.session.age && req.session.description && req.session.photo){
        res.redirect('/admin');
    } else {
        res.sendFile(__dirname + '/index.html');
    }

});

app.post('/login', (req, res) => {
    let resultExp = 0;
    let resultPur = 0;

    for(let key in req.body) {
        req.session[key] = req.body[key]
        if(key.includes('pw_')){
            req.session.expirience = ++resultExp
        }
        if(key.includes('pub_')){
            req.session.purpose = ++resultPur
        }
    }
    res.redirect("/admin");
});
app.get('/admin', (req, res) => {

    if(req.session.name && req.session.alias && req.session.age && req.session.description && req.session.photo){
        res.write(`<h1>Session for new</h1>
        <pre>
        name:${req.session.name}
        alias:${req.session.alias}
        age:${req.session.age}
        description:${req.session.description}
        photo:${req.session.photo}
        expirience:${req.session.expirience}
        level:${req.session.level}
        purpose:${req.session.purpose}</pre>`);
        res.end('<form action="/logout" method="GET"><fieldset><button>FORGET</button></fieldset></form>');
    }else{
        res.write('<h1>Please login first.</h1>')
        res.end(`<a href='http://${HOST}:${PORT}'>Login</a>`)
    }
})

app.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});


app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})