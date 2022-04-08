const express = require('express');
const app = express();
const fetch = require('node-fetch');
const crypto = require('crypto');


const pubKey = '3878498048c52122db5d50449c4f1076';
const privKey = '35f1e18c8301097768e64e00384d8c501a8b0bec';

let ccc = '';

console.log(ccc);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/js', express.static(__dirname + '/'));

app.get('/',  function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/show', async function(req, res){
    res.send(await getMarvel())
});

app.listen(3000,"127.0.0.1",function(){
    console.log("Open http://127.0.0.1:3000/ \n Click Ctrl+C for stop server");
});

async function getMarvel() {
    let now = Date.now();
    ccc = crypto.createHash('md5').update(now + privKey + pubKey).digest("hex");
    return fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${pubKey}&hash=${ccc}&ts=` + now)
        .then(res => res.json());
}