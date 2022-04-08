const csv = require('csv-parser')
const fs = require('fs')
const express = require('express')
const path = require('path')
const session = require('express-session');

const app = express();
const PORT = 3000
const HOST = 'localhost'

app.use(express.static('./'))
app.use(session({secret: 'hsjhjgkdfjgksj', saveUninitialized: true, resave: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
})

app.post('/', (req, res) => {
    const result = []
    fs.createReadStream('marvel_characters_info.csv')
        .pipe(csv({}))
        .on('data', (data) => result.push(data))
        .on('end', () => {
            
            res.send(render(renderTable(result)));
        });
})


app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
});

function render(insert = false) {
    try {
        const data = fs.readFileSync('index.html', 'utf-8');
        return (data && insert) ? data.replace("#TEXT#", insert) : data.replace("#TEXT#", ' ');
    } catch (err) {
        console.error(err)
    }
    return false;

}

function renderTable(arr, filter = false) {
    let map = getFilters(arr);
    let result = '<form action="/filter" method="get" id="filters"><table border="1px;"><tr>';
    for(let key in arr[0]){
        result += `<th>${getFilterHtml(key, map, filter ? filter[key] : false)}</th>`;
    }
    result += '</tr>';
    if(filter && Object.keys(filter).length !== 0) {
        arr = arr.filter(item => {
            let flag = true;
            for(let key in item){
                if(!(filter[key] === item[key] || filter[key] === 'all-items')) {
                    flag = false;
                }
            }
            return flag;
        });
    }
    arr.map(item => {
        result += '<tr>';
        for(let key in item){
            result += `<td>${item[key]}</td>`;
        }
        result += '</tr>';
    });
    result += '</table><button type="submit" id="submit"></button></form>';
    return result;
}

function getFilterHtml(title, map, filter) {
    let result = `<select name="${title}">${title}`;
    result += `<option value="all-items" ${!filter || filter === 'all-items' ? 'selected' : ''}><b>${title} (all)</b></option>`;
    map.get(title).map(item => {
        result += `<option value="${item}" ${filter === item ? 'selected' : ''}>${item}</option>`;
    });
    result += '</select>';
    return result;
}

function getFilters(arr) {
    let map = new Map();
    for(let key in arr[0]){
        map.set(key, [...new Set(arr.map(item => {return item[key]}))].sort());
    }
    return map;
}