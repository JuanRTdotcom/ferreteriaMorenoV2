const mongoose = require('mongoose')
const { Schema } = mongoose
// let bcrypt = require('bcryptjs')

const userSchema = new Schema({
    
        usuario: {type: String, required: true},
        contrasenia: {type: String, required: true},
        nombre: {type: String, required: true},
        permiso: {type: String, required: true},
        imgPerfil: {type: String, required: true}
    
   
})

// se debe encriptar contraseñas
userSchema.methods.matchPassword = async function (password){
    return true
}

module.exports = mongoose.model('usuarios',userSchema)