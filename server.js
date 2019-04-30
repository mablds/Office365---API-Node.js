const express = require('express')
const request = require('request-promise')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Master Server \nPorta: 3000')
})

function optionFactory(index, op){
    return {
        method: 'POST',
        uri: 'http://localhost:300'+ index +'/op',
        body: {
            op: op
        },
        json: true
    }
}

// console.log(elem)


const obj = {}

// server2
app.post('/resolves', (req, res) => {
    const opJson = req.body.options
    request(optionFactory(1, opJson["op1"]))
        .then(function (response) {
            obj['1'] = response
            request(optionFactory(2, opJson["op2"]))
                .then(function (response) {
                    obj['2'] = response
                    request(optionFactory(3, opJson["op3"]))
                        .then(function (response) {
                            obj['3'] = response
                            request(optionFactory(4, opJson["op4"]))
                                .then(function (response) {
                                    obj['4'] = response  
                                    
                                    res.send(JSON.stringify(obj))
                                })
                                .catch(function (err) {
                                    console.log('Erro de request ' + err)
                                })
                        })
                        .catch(function (err) {
                            console.log('Erro de request ' + err)
                        })
                })
                .catch(function (err) {
                    console.log('Erro de request ' + err)
                })
        })
        .catch(function (err) {
            console.log('Erro de request ' + err)
        })
})



