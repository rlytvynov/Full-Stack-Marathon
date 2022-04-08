const fs = require('fs');
const xml2js = require('xml2js');
const xmlParser = require('xml2json');
const path = require('path')


class ListAvengerQuotes {
    dataXML = ''
    constructor(data) {
        this.data = {content: data}
    }
    toXML(file) {
        let builder = new xml2js.Builder();
        this.dataXML = builder.buildObject(this.data);

        try {
            fs.writeFile(file, this.dataXML, (err) => {
                if (err) console.log(err);
            });
        } catch (err) {
            console.error(err)
        }
        return this.dataXML
    }
    fromXML(file) {
        /*fs.readFile(__dirname + '/' + file, (err, data) => {
            if(err) throw new Error(err)

            const parser = new xml2js.Parser()
            let str = 'hui'
            let jopa = parser.parseStringPromise(data).then((res) => {
                res.content.data.forEach(element => {
                    str += JSON.stringify(element) + '\n'
                });
            }).catch(err => console.error(err))
        }) 
        console.log(global.str)*/
        //let xml = fs.readFileSync(path.resolve(file), 'utf8');
        //console.log(xml)
        //console.log('JSON output:', obj);
        let str = ''
        this.data.content.data.forEach(element => {
            str += JSON.stringify(element) + '\n'
        });
        return str
    }
}

module.exports.ListAvengerQuotes = ListAvengerQuotes