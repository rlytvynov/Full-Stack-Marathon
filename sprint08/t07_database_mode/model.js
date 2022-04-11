let mysql = require('mysql2')
const db = require('./config.json');

class Model {
    connection
    constructor(table) {
        this.table = table
    }

    async find(id) {
        let query = `SELECT * FROM ${this.table} WHERE id=${id};`;
        const pool = await mysql.createConnection({
            host     : db.host,
            user     : db.user,
            password : db.password,
            database : db.db
        });
        const promisePool = pool.promise();
        const [rows,fields] = await promisePool.query(query);
        console.log(rows)
        if(rows){
            rows.map(item => {
                this.data.push(item);
            })
        }
        return this.data;
    }

    async save(data) {
        let rows = []
        let values = []
        let update = []

        for(let row in data) {
            if(row !== 'id') {
                rows.push(row)
                values.push(`'${data[row]}'`)
                if(row !== 'race_id') {
                    update.push(`${row} = '${data[row]}'`)
                } else {
                    update.push(`${row} = ${data[row]}`)
                }
            }
        }

        let query = ''
        if(data.id) {
            query = `UPDATE ${this.table} SET ${update} WHERE id = ${data.id};`
        } else {
            query = `INSERT ${this.table} (${rows}) VALUES (${values});`
        }

        const pool = await mysql.createConnection({
            host     : db.host,
            user     : db.user,
            password : db.password,
            database : db.db
        });
        const promisePool = pool.promise();
        const [raws,fields] = await promisePool.query(query);
        const [raws2,fields2] = await promisePool.query(`SELECT * FROM ${this.table}`);
        if(raws2){
            raws2.map(item => {
                this.data.push(item);
            })
        }
        return this.data
    }

    async delete(id) {
        let query = `SELECT * FROM ${this.table} WHERE id=${id};`;
        const pool = await mysql.createConnection({
            host     : db.host,
            user     : db.user,
            password : db.password,
            database : db.db
        });
        const promisePool = pool.promise();
        const [rows,fields] = await promisePool.query(query);
        if(rows.length !== 0) {
            console.log(rows)
            let query1 = `DELETE FROM ${this.table} WHERE id=${id};`;
            const [rows1,fields1] = await promisePool.query(query1);
            const [rows2,fields2] = await promisePool.query(`SELECT * FROM ${this.table}`);
            if(rows2){
                rows2.map(item => {
                    this.data.push(item);
                })
            }
            return this.data
        } else {
            return "Error! Such hero isn't present in table"
        }
    }
}

module.exports = Model