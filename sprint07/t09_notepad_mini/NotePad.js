let fs = require('fs')

class NotePad {
    dir = './tmp';
    list = [];
    constructor() {
        this.getList();
    }
    getList() {
        this.list = [];
        try {
            fs.accessSync(this.dir, fs.constants.R_OK);
            let data = fs.readdirSync(this.dir, {encoding: "utf-8", withFileTypes: true});
            if(data) {
                data.forEach(file => {
                    this.list.push(file.name);
                });
            }

        } catch (err) {
            fs.mkdirSync(this.dir);
        }
        return this.list;

    }
    hasFiles() {
        return this.list ? true : false;
    }
    getHTMLList() {
        let date = new Date(Date.now())
        let result = `${date.getFullYear()}-${date.getMonth()<10?'0'+ date.getMonth():date.getMonth()}-${date.getDate()<10?'0'+ date.getDate():date.getDate()} 
        ${date.getHours()<10?'0'+ date.getHours():date.getHours()}:${date.getMinutes()<10?'0' + date.getMinutes():date.getMinutes()}:${date.getSeconds()<10?'0' + date.getSeconds():date.getSeconds()}`
        let render = '<ul>';
        this.list.map(item => {
            render += '<li data-file="' + item + '" class="btn-file">' + result + ' > ' + item + ' <a href = "/delete/?file='+item+'">DELETE</a></li>';
        });
        render += '</ul>';
        return render === '<ul></ul>' ? '' : render;
    }
}

module.exports = NotePad