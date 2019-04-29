const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const aux = 0
// const solvedNumber = 0

app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3004, () => {
    console.log('Slave Server 4 \nPorta: 3004')
})

app.post('/op', (req, res) => {
    const operacao = req.body.op.split('+')
    const num1 = parseInt(operacao[0])
    const num2 = parseInt(operacao[1])
    // solvedNumber += num1
    // solvedNumber += num2
    const solvedNumber = num1 + num2
    // aux += solvedNumber
    console.log(solvedNumber)
})
const bla = aux
// module.exports.solvedNumber = bla