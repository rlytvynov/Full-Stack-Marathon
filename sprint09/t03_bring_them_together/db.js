const mysql = require('mysql2');
const User = require('./models/user');
const db = require('./config.json');
const fs = require('fs');
const crypt = require('bcrypt');
const nodemailer = require("nodemailer");


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
            email: req.body.email,
            status: 'user'
        });
        res.redirect('/registered');
    } else {
        res.send(getFile('reg', `<div>Error!!! ${valid.error}</div>`));
    }

}

exports.loginUser = async function (req, res) {
    if(req.method === 'GET') {
        if(req.session.user) {
            res.redirect('/home/');
        } else {
            res.send(render('login'));
        }
    } else {
        if(req.session.user) {
            res.redirect('/home/');
        } else {
            let valid = await validate(req.body)
            if(valid.status === 200) {
                console.log(valid.username + ' ' + valid.userstatus)
                req.session.user = valid.username;
                req.session.ustat = valid.userstatus;
                req.session.uemail = valid.email;
                req.session.upassword = req.body.password;
                console.log(req.session.user.status)
                res.redirect('/home/')
            } else {
                res.send(getFile('login', `<div>User ${valid.error}</div>`));
            }
        }
    }
}

exports.index = function(req, res) {
    if(req.session.user) {
        res.redirect('/home/')
    } else {
        res.send(getFile('login'));
    }
}

exports.register = function(req, res) {
    res.send(getFile('reg'))
}

exports.registered = function(req, res) {
    res.send(getFile('done'))
}

exports.home = function(req, res) {
    if(req.session.user) {
        res.send(getFile('home', `<h1>User: <b style = "color: white">${req.session.user}</b> Status: <b style = "color: white">${req.session.ustat}</b></h1>`))
    } else {
        res.redirect('/');
    }
}

exports.logout = async function(req, res) {

    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });

}

exports.sendEmail = async function(req, res) {

    if(req.session.user) {
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: testAccount.user, // generated ethereal user
              pass: testAccount.pass, // generated ethereal password
            },
          });
    
          let info = await transporter.sendMail({
            from: '"Password for sprint 09 👻" <rlytvynov@ucode.world.connect>', // sender address
            to: `${req.session.uemail}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text:`Your password: ${req.session.upassword}`, // plain text body
            html: `<b>Your password: ${req.session.upassword}</b>`, // html body
          });
    
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
          res.send(getFile('email', `<div><h1>Message has been send on ${req.session.uemail}</h1></div>
                                    <div><p>Check results of test-sending of email here</p><p>${nodemailer.getTestMessageUrl(info)}</p></div>`))    
    } else {
        res.send('<h1>Not Found</h1>')
    }

}


async function validate(data) {

    if(data.login && data.password && !data.email) {
        let user = new User()
        let isUser = await user.getUser(data.login, data.password)
        let stat = 404 
        let error = 'Not Found'
        if(isUser.ok) {
            stat = 200
            error = ''
        }
        return {status: stat, error: error, username: isUser.uname, userstatus: isUser.ustatus, email: isUser.uemail};
    } else {
        let user = new User()
        let isAtDataBaseEmail = await user.getInfo('email', data.email)
        let isAtDataBaseLogin = await user.getInfo('login', data.login)
        let error = '';
    
        let stat = 200
        if(isAtDataBaseLogin) {
            error += "This login already exists! ";
            stat = 404
        }
        if(isAtDataBaseEmail) {
            error += "This email already exists! ";
            stat = 404
        }
    
        return {status: stat, error: error};
    }
}

function getFile(filename, insert = false) {
    try {
        const data = fs.readFileSync(__dirname + `/${db.view}/${filename}.html`, 'utf-8');
        return (data && insert) ? data.replace("#TEXT#", insert) : data.replace("#TEXT#", '');
    } catch (err) {
        console.error(err);
    }
    return false;

}
