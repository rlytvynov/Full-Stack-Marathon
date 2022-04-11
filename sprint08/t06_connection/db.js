let express = require('express')
let dataBase = require('./config.json')
let mysql = require('mysql2')

let server = express()
const PORT = 3000;
const HOST = "localhost";

function setConnectionPool(db) {
    return mysql.createConnection({
        host     : db.host,
        user     : db.user,
        password : db.password,
        database : db.db
    })

}

server.get('/', (req, res) => {
    let conn = setConnectionPool(dataBase)
    conn.connect((err) => {
        if (err) {
            console.log(err)
        } else {
            conn.query('SELECT * FROM heroes', (error, results, fields) => {
                if (error) {
                    console.log(error)
                    conn.end()
                } else {
                    res.send(results)
                    conn.end()
                }
            });
        }
    })
})

server.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
});