// console.log("todo marcha bien");
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const tuit = require('./api/tuit')


const app = express()
app.use(bodyParser.json())
app.use('/tuit', tuit)

mongoose.connect('mongodb://localhost/tuitadb',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})

app.get('/', (req,res)=>{
    res.send('Bienvenido')
})


// muestra solo el número del usuario
app.post('/ruta/:usuario',(req,res)=>{
    res.send(req.params.usuario)
})

app.listen(3000);