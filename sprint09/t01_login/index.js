const express = require('express')
const session = require('express-session');
const dataBase = require('./db');
const app = express()
const userController = express.Router();
// ...
const PORT = 3000;
const HOST = "localhost";

app.use(session({secret: 'hsjhjgkdfjgksj', saveUninitialized: true, resave: true, user: {}}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'));


userController.post('/create', dataBase.addUser) //обработка данных регистрации
userController.post('/login', dataBase.loginUser) //обработка данных для ыхождения в личный кабинет
userController.get('/logout', dataBase.logout) //выход из текущего юзера
app.use('/user', userController);

app.use('/register', dataBase.register) //форма регистрации
app.use('/registered', dataBase.registered) //окно успешной регистрации
app.use('/home', dataBase.home) //окно домашней панели
app.use('/', dataBase.index) //дефолт - окно логина


app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
});