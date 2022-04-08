const express = require('express')
const Iconv  = require('iconv').Iconv;
const path = require('path')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const HOST = 'localhost'
const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
})

app.post("/", (req, res) => {
    if (req.body.inputtext && req.body.charset) {
        let resultedOutput = `        
        <form action="/" method="POST">
            <label for="text">Change charset:</label>
            <input type="text" name="inputtext" placeholder="Input string">
            <br>
            <label for="charset">Select harset or several charsets</label>
            <select name="charset" id="charset" multiple>
                <option value="UTF-8">UTF-8</option>
                <option value="ISO-8859-1">ISO-8859-1</option>
                <option value="Windows-1252">Windows-1252</option>
            </select>
            <button type="submit">Change charset</button>
            <button onclick="location.href='/'">Clear</button>
            <br>
            <label for="inputed">Input string</label>
            <textarea type="inputed" cols="25" rows="3" placeholder="${req.body.inputtext}"></textarea>
            <br>
        `
        if(typeof req.body.charset === 'object') {
            req.body.charset.forEach(element => {
                var iconv = new Iconv('UTF-8', `${element}//TRANSLIT//IGNORE`);
                var buffer = iconv.convert(req.body.inputtext);
                resultedOutput = resultedOutput.concat(`
                    <label for="${element}">${element}</label>
                    <textarea type="${element}" cols="25" rows="3" placeholder="${buffer}"></textarea>
                    <br>
                `)
            });
            resultedOutput = resultedOutput.concat('</form>')
        } else {
            var iconv = new Iconv('UTF-8', `${req.body.charset}//TRANSLIT//IGNORE`);
            var buffer = iconv.convert(req.body.inputtext);
            resultedOutput = resultedOutput.concat(`
                <label for="${req.body.charset}">${req.body.charset}</label>
                <textarea type="${req.body.charset}" cols="25" rows="3" placeholder="${buffer}"></textarea>
                <br>
            `)
        }
        res.send(resultedOutput)

    } else {
      res.sendFile(path.resolve('index.html'));
    }
  });

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})