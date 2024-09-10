const express = require ('express')
const app = express()
const porta = 3000
app.use(express.json());



app.use ((req, res) => {
    res.status(404).send('Pagina não encontrada ! ')
})
app.listen (porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})