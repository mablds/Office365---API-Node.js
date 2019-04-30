const express = require('express')
const request = require('request-promise')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Master Server \nPorta: 3000')
})

function promiseFactory(index, op) {
    const config = {
        method: 'POST',
        uri: 'http://localhost:300' + index + '/op',
        body: {
            op: op
        },
        json: true
    }
    return request(config)
}

// servers
app.post('/resolves', (req, res) => {
    const opJson = req.body.options
    const keys = Object.keys(opJson)
    const mapeando = keys.map(key => {
        const ind = key.slice(2)
        return promiseFactory(ind, opJson[key])
    })

    Promise.all(mapeando)
        .then(response => res.send(response))         
        .catch(error => console.log(error))
})



