let multer = require('multer')
let path = require('path')
let sharp = require('sharp')

let nombraFoto = multer.diskStorage({
        destination: path.join(__dirname,'../public/images/productos'),
        filename: (req,file,cb)=>{
            cb(null,file.originalname)
        }
})

let express = require('express')

let rutas = express.Router()
const nuevoProducto = require('../models/newProducto')
const usuario = require('../models/usuario')
const rubro = require('../models/rubro')
const linea = require('../models/linea')
const nuevoColor = require('../models/color')
const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name : process.env.CLD_nombre,
    api_key : process.env.CLD_key,
    api_secret: process.env.CLD_secret
})
let fs = require('fs-extra')   

const passport = require('passport')
const { Router } = require('express')

rutas.get('/',(req,res)=>{
    res.render('index',{tituloPagina:'Ferretería Moreno'})
    
})

rutas.get('/dashboard',estaLogueado,(req,res)=>{
    
    res.render('dashboard')
    
})

rutas.get('/login',(req,res)=>{

    res.render('login')
    
})

rutas.get('/catalogo-online', async (req,res)=>{
    
    res.render('shop')
    
})

rutas.get('/catalogo-online/getData', async (req,res)=>{
    const _misDatosBD = await nuevoProducto.find({},{"rubro":1,"color":1,"linea":1,"precio":1,"nombre":1,"imagenURL":1,"_id":0})
    const _datosColores = await nuevoColor.find()
    let misRubros = _misDatosBD.map(e=>{ 
        return e.rubro 
    }) 
    
    let misColores = _misDatosBD.map(e=>{ 
        return e.color 
    })
    
    let misLineas = _misDatosBD.map(e=>{ 
        return e.linea 
    }) 
    let rubrosUnicos=misRubros.filter(unique);
    let coloresUnicos=misColores.filter(unique);
    let lineasUnicos=misLineas.filter(unique);

    let codigoColores = []
    coloresUnicos.forEach(e=>{
        _datosColores.forEach(x=>{
            if(x.nombre == e){
                codigoColores.push(x.color)
            }
        })
    })
    console.log(coloresUnicos)
    console.log(codigoColores)
    res.send({_misDatosBD,rubrosUnicos,coloresUnicos,lineasUnicos,codigoColores})
})

rutas.post('/login',passport.authenticate('local',{
    successRedirect:'/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}))

rutas.get('/cerrarsesion',(req,res)=>{
    req.logOut()
    res.redirect('/login')
})





rutas.get('/agregar-producto',estaLogueado,async(req,res)=>{
    const _dataRubro = await rubro.find({estado:"Activo"})
    const _dataLinea = await linea.find({estado:"Activo"})
    const _dataColor = await nuevoColor.find({estado:"Activo"})
    res.render('agregarProducto',{_dataRubro,_dataLinea,_dataColor})
    
})

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }

function estaLogueado(req , res , next ) {
    if(req.isAuthenticated()){
        return next()
    }
    req.flash('error','Iniciar Sesión')
    return res.redirect('/login')
}


rutas.post('/reporte-producto/buscar',estaLogueado,async (req,res)=>{
    const _dataProductosTotal = await nuevoProducto.find()
    const{dato} = req.body
    let _dataProductos = _dataProductosTotal.filter(e=>(e.nombre.toLowerCase()).includes(dato.toLowerCase()))
    if(dato.trim()==''){ 
        _dataProductos=_dataProductosTotal
    }
    res.render('reporteProducto',{_dataProductos})
    
})


rutas.get('/reporte-producto',estaLogueado,async (req,res)=>{
    const _dataProductos = await nuevoProducto.find()
    res.render('reporteProducto',{_dataProductos})
    
})

rutas.get('/reporte-producto/editar/:id',estaLogueado,async (req,res)=>{
    let productoEditar = await nuevoProducto.findById(req.params.id)
    res.render('editarProducto',{productoEditar})
    
})



rutas.put('/reporte-producto/editarproducto/:id',estaLogueado,

async (req,res)=>{
    
    const{nombre,rubro,linea,color,precio} = req.body

    const error = []
    
    if(!nombre){
        error.push({text:'Ingresar un nombre!'})
    }
    if(!rubro){
        error.push({text:'Ingresar un rubro!'})
    }
    if(!linea){
        error.push({text:'Ingresar una linea!'})
    }
    if(!color){
        error.push({text:'Ingresar un color!'})
    }
    if(!precio){
        error.push({text:'Ingresar un precio!'})
    }
    if(error.length>0){
        req.flash('error','Error al editar')
    }else{
        
        await nuevoProducto.findByIdAndUpdate(req.params.id,{nombre,rubro,linea,color,precio})
        req.flash('success_msg','Producto Modificado!')
        res.redirect('/reporte-producto')
    }
})


rutas.post('/reporte-producto/delete/:id',estaLogueado,async (req,res)=>{
    const fotoBorrada = await nuevoProducto.findByIdAndDelete(req.params.id)
    await cloudinary.v2.uploader.destroy(fotoBorrada.public_id)
    req.flash('success_msg',`${fotoBorrada.nombre} eliminado!`)
    res.redirect('/reporte-producto')
})


rutas.post('/upload',estaLogueado,
multer({
    storage:nombraFoto,
    dest: path.join(__dirname,'../public/images/productos'),
    limits:{fileSize: 24000000}, // max 1mb
    fileFilter: (req,file,cb)=>{
        const fileTypes = /jpeg|jpg|png|gif/
        const validacion = fileTypes.test(file.mimetype)
        const extensionNombre = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase())
        if(validacion && extensionNombre){
            return cb(null,true)
        }
        
        
        cb("ERROR: Seleccione imagen válida")
        
    }
    }).single('image')
,async (req,res)=>{
    
    const{nombre,rubro,linea,color,precio} = req.body
    const{originalname} = req.file
    let _quitarNumeroNombre = path.extname(originalname).toLocaleLowerCase().length
    let nombrefoto = originalname.substr(0,originalname.length-_quitarNumeroNombre)
    const error = []
    
    if(!nombre){
        error.push({text:'Ingresar un nombre!'})
    }
    if(!rubro){
        error.push({text:'Ingresar un rubro!'})
    }
    if(!linea){
        error.push({text:'Ingresar una linea!'})
    }
    if(!color){
        error.push({text:'Ingresar un color!'})
    }
    if(!precio){
        error.push({text:'Ingresar un precio!'})
    }
    if(error.length>0){
        req.flash('error','Datos Incompletos!')
    }else{
        // cloudinary.image("woman.jpg", {quality: "auto"})
        
      

        let fianal = path.extname(req.file.originalname).toLocaleLowerCase()
        let objetivo = path.join(req.file.destination,'renovado'+fianal)
        
        await sharp(req.file.path).resize(250,250,{
            fit:"contain",
            background:{
                r: 255,
                b:255,
                g:255,
                alpha:1
            }
        }).toFile(objetivo)
        
        const imagenSubida = await cloudinary.v2.uploader.upload(objetivo)
        // console.log(imagenSubida)
        const miNuevoProducto = new nuevoProducto({nombre,rubro,linea,color,precio,imagenURL:imagenSubida.secure_url,public_id:imagenSubida.public_id})
        await miNuevoProducto.save()
        req.flash('success_msg','Producto Agregado!')
     
        await fs.unlink(objetivo)
        await fs.unlink(req.file.path)
        
        res.redirect('/agregar-producto')
    }
    // console.log(req.file) // datos de imagen
    
})







rutas.post('/registrar-rubros',estaLogueado,async(req,res)=>{

const {nombre,estado} = req.body
const miNuevoRubro = new rubro({nombre,estado})
await miNuevoRubro.save()
req.flash('success_msg','Rubro Agregado!')
res.redirect('/metadata/rubros')    
})

rutas.post('/registrar-lineas',estaLogueado,async(req,res)=>{

    const {nombre,estado} = req.body
    const miNuevoLinea = new linea({nombre,estado})
    await miNuevoLinea.save()
    req.flash('success_msg','Linea Agregada!')
    res.redirect('/metadata/lineas')    
})

rutas.post('/registrar-colores',estaLogueado,async(req,res)=>{
    
    const {nombre,color,estado} = req.body
    const miNuevoColor = new nuevoColor({nombre,estado,color})
    await miNuevoColor.save()
    req.flash('success_msg','Color Agregado!')
    res.redirect('/metadata/colores')    
})

///////////////////////////////////// metadata ////////////////////
rutas.get('/metadata/rubros',estaLogueado, async(req,res)=>{
    const _dataRubros = await rubro.find()
    res.render('rubros',{_dataRubros})  

})
////////////////////////////////////////líneas//////////////////////////
rutas.get('/metadata/lineas',estaLogueado, async(req,res)=>{
    const _dataLineas = await linea.find()
    res.render('lineas',{_dataLineas})  

})
//////////////////////////////////////////colores////////////////////////////

rutas.get('/metadata/colores',estaLogueado, async(req,res)=>{
    const _dataColores = await nuevoColor.find()
    res.render('colores',{_dataColores})  

})


////////////////////////////////eliminar rubro///////////////////////
rutas.get('/metadata/rubros/eliminar/:id',estaLogueado,async (req,res)=>{
    await rubro.findByIdAndDelete(req.params.id)
    req.flash('success_msg','Rubro eliminado!')
    res.redirect('/metadata/rubros')
    
})

////////////////////////////////eliminar lineas///////////////////////
rutas.get('/metadata/lineas/eliminar/:id',estaLogueado,async (req,res)=>{
    await linea.findByIdAndDelete(req.params.id)
    req.flash('success_msg','Linea eliminada!')
    res.redirect('/metadata/lineas')
    
})

////////////////////////////////eliminar colores///////////////////////
rutas.get('/metadata/colores/eliminar/:id',estaLogueado,async (req,res)=>{
    await nuevoColor.findByIdAndDelete(req.params.id)
    req.flash('success_msg','Color eliminado!')
    res.redirect('/metadata/colores')
    
})



module.exports=rutas