const mongoose = require('mongoose')
const { Schema } = mongoose
// let bcrypt = require('bcryptjs')

const lineaSchema = new Schema({
    
        nombre: {type: String, required: true},
        estado: {type: String, required: true}
        
    
   
})

// se debe encriptar contraseñas


module.exports = mongoose.model('lineas',lineaSchema)