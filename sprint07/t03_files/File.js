let fs = require('fs')

class File {
    dir = './tmp'
    
    constructor(name) {
        if (!fs.existsSync(this.dir)){
            fs.mkdirSync(this.dir);
        }
        this.name = this.dir + '/' + name
        fs.writeFile(this.name, '', (err) => {
            if(err) console.log(err)
        })

    }

    write(content) {
        try {
            const fd = fs.openSync(this.name, 'a+');
        } catch (err) {
            console.error(err);
        }
        try {
            const data = fs.appendFileSync(this.name, content);
        } catch (err) {
            console.error(err);
        }
    }

    read() {
        try {
            const data = fs.readFileSync(this.name, 'utf-8');
            return data ? data : "File is Empty!";
        } catch (err) {
            console.error(err)
        }
        return "No file information";
    }

    delete() {
        let res = fs.rmSync(this.name);
    }
}


module.exports = File