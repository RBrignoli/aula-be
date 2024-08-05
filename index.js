const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const db = require('./db.json')
app.get('/produtos', function (req,res) {
    var produtos = db.produtos
    res.json(produtos)
})
app.get('/produtos/:id', function (req, res){
    const _id = req.params.id
    console.log(db.produtos)
    res.send(_id)
    // filtrar lista de produtos e retornar no res.send() apenas o produto do id selecionado
})

app.listen(8000)