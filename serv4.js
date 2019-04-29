const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3004, () => {
    console.log('Slave Server 4 \nPorta: 3004')})

app.post('/op', (req, res) => {
    const operacao = req.body.op.split('+')
    const num1 = parseInt(operacao[0])
    const num2 = parseInt(operacao[1])
    const solvedNumber = num1 + num2
    console.log(solvedNumber)
})
// module.exports.solvedNumber = bla