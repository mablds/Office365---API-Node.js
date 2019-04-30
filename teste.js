
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


console.log(optionFactory(1, "32+33"))