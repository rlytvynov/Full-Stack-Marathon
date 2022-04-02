let express = require('express')
let path = require('path')
const os = require('os')

const PORT = process.env.PORT ?? 3000
const app = express()

app.get('/', (req, res) => {
    console.log(output(req))
    let result = 'Result is on server part</br>';
    result += 'A list of parameters passed by URL <a href = "?campus=govno&univer=top&russia=guess;)"">click</a>'
    res.send(result);
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})

let output = (req) => {
    let res = '---------------------------------------------------------------------------------------------------------------\n'
    res+=`a name of file of the executed script           : ${path.basename(__filename)}\n`
    res+=`arguments passed to the script                  : ${process.argv.slice(2).join('---')}\n`
    res+=`IP address of the server                        : ${os.networkInterfaces().en0[1].address}\n`
    res+=`a name of host that invokes the current script  : ${os.hostname()}\n`
    res+=`a name and a version of the information protocol: ${req.protocol}\n`
    res+=`a query method                                  : ${req.method}\n`
    res+=`User-Agent information                          : ${req.headers['user-agent']}\n`
    res+=`IP address of the client                        : ${req.socket.remoteAddress}\n`
    res+=`a list of parameters passed by URL              : ${JSON.stringify(req.query)}\n`
    res+='---------------------------------------------------------------------------------------------------------------'
    return res
}