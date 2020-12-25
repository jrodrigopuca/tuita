// console.log("todo marcha bien");
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/tuita',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})

app.get('/', (req,res)=>{
    res.send('Bienvenido')
})

app.post('/ruta/:usuario',(req,res)=>{
    res.send(req.params.usuario)
})

app.listen(3000);