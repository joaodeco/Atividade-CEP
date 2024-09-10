const axios = require('axios')

const cepEndereço = (req, res, next) => {
    axios.get(`viacep.com.br/ws/${req.body.cep}/json/ `)
    .then((res) => {
        console.log(res)
    })

    console.log('no middleware de cep')
    next()
}

module.exports = cepEndereço