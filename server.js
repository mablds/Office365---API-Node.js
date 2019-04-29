const express = require('express')
const request = require('request-promise')
const app = express()
const opJson = {
    op1: "32+33",
    op2: "2+4",
    op3: "6+3",
    op4: "10+8",
}

app.listen(3000, () => {
    console.log('Master Server \nPorta: 3000')
})

app.post('/resolves', (req, res) => {
        const options = [{
            method: "POST",
            uri: "http://localhost:3001/op",
            body : {
                op: opJson["op1"]
            },
            json : true
        },
        {
            method: 'POST',
            uri: 'http://localhost:3002/op',
            body : {
                op: opJson["op2"]
            },
            json : true
        },
        {
            method: 'POST',
            uri: 'http://localhost:3003/op',
            body : {
                op: opJson["op3"]
            },
            json : true
        },
        {
            method: 'POST',
            uri: 'http://localhost:3004/op',
            body : {
                op: opJson["op4"]
            },
            json : true
        }]
    
    options.forEach(elem => {
        console.log(elem)
        request(elem)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (err) {
                console.log('Erro de request ' + err)
            })
            
        res.send('200')
    })
})

// app.post('/resolves', (req, res) => {
//     const options = {
//         method: 'POST',
//         uri: `http://localhost:3001/op}`,
//         body: {
//             op: opJson['op1']
//         },
//         json: true
//     }

//     request(options)
//         .then(function (response) {
//             console.log(response)
//         })
//         .catch(function (err) {
//             console.log('Erro de request ' + err)
//         })
//     // req.body

//     res.send()
// })



