let express = require('express')
let rutas = express.Router()

rutas.get('/',(req,res)=>{
    res.render('index',{tituloPagina:'Ferretería Moreno'})
    
})

module.exports=rutas