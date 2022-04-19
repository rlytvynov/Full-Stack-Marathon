const mysql = require('mysql2');
const User = require('./models/user');
const db = require('./config.json');
const fs = require('fs');
const crypt = require('bcrypt');


exports.addUser = async function (req, res) {
    let valid = await validate(req.body)
    console.log("valid--- " + valid.status);
    if(valid.status === 200) {
        let user = new User();
        console.log(req.body);
        user.save({
            full_name: req.body.name,
            login: req.body.login,
            password: await crypt.hash(req.body.password, 8),
            email: req.body.email
        });
        res.redirect('/done');
    } else {
        res.send(getFile('/public/reg.html', `<div>Error!!! ${valid.error}</div>`));
    }

}

exports.index = function(req, res) {
    res.send(getFile('/public/reg.html'));
}

exports.registered = function(req, res) {
    res.send(getFile('/public/done.html'))
}


async function validate(data) {

    let user = new User()
    let isAtDataBaseEmail = await user.getInfo('email', data.email)
    let isAtDataBaseLogin = await user.getInfo('login', data.login)
    let error = '';

    let stat = 200
    if(isAtDataBaseLogin) {
        error += "This login already exists! ";
        console.log('каковатв хуя есть логин')
        stat = 404
    }
    if(isAtDataBaseEmail) {
        error += "This email already exists! ";
        console.log('каковатв хуя есть емеил')
        stat = 404
    }

    return {status: stat, error: error};
}

function getFile(filename, insert = false) {
    try {
        const data = fs.readFileSync(__dirname + filename, 'utf-8');
        return (data && insert) ? data.replace("#TEXT#", insert) : data.replace("#TEXT#", '');
    } catch (err) {
        console.error(err);
    }
    return false;

}





/*let express = require('express')
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
*/