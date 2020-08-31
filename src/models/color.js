const mongoose = require('mongoose')
const { Schema } = mongoose
// let bcrypt = require('bcryptjs')

const colorSchema = new Schema({
    
        nombre: {type: String, required: true},
        estado: {type: String, required: true},
        color: {type: String, required: true}
   
})

// se debe encriptar contraseñas


module.exports = mongoose.model('colores',colorSchema)