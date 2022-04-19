const express = require('express')
const dataBase = require('./db');
const app = express()
const userController = express.Router();
// ...
const PORT = 3000;
const HOST = "localhost";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'));


userController.post('/create', dataBase.addUser)
userController.post('/validate', dataBase.addUser)
app.use('/user', userController);
app.use('/done', dataBase.registered)
app.use('/', dataBase.index)

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
});