const express = require('express');
let cookieSession = require('cookie-session');
const app = express();

const PORT = 3000
const HOST = 'localhost'


app.use(cookieSession({
    name: 'session',
    keys: ['secret1', 'secret2'],
    // Cookie Options
    maxAge: 60000
}))

app.get('/', function (req, res, next) {
    // Update views
    req.session.views = (req.session.views || 0) + 1
  
    // Write response
    res.end('This page was loaded ' + req.session.views + ' time(s) in last minute')
    next()
  })

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
});