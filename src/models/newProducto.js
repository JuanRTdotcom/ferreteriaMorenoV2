const mongoose = require('mongoose')
const { Schema } = mongoose

const productoSchema = new Schema({
    nombre: {type: String, required: true},
    rubro: {type: String, required: true},
    linea: {type: String, required: true},
    color: {type: String,default:'default'},
    precio: {type: Number, default:0},
    imagenURL: {type: String},
    public_id: {type: String}
})

module.exports = mongoose.model('productos',productoSchema)