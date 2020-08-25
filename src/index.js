if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}
 
let express = require('express')
let path = require('path')
let methodOverRide = require('method-override')
let session = require('express-session')
let passport = require('passport')
let flash = require('connect-flash')

const cookieParser = require('cookie-parser')
//inicializacion
let app = express()
require('./database')
require('./config/passport')


//configuracion
app.set('port', process.env.PORT || 4000) //servidor
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


//middleware
// app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser('micookiesecreta'))
app.use(methodOverRide('_method'))
app.use(session({
    secret:'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


//variables globales
app.use((req,res,next)=>{

    res.locals.succes_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.loginMessage = req.flash('loginMessage')
    res.locals.message = req.flash('message')
    res.locals.nombreUsuario = req.user || null
    next()
})


//mis rutas
app.use(require('./rutas/index'))
app.use(express.static(path.join(__dirname,'public')))



///Abrir mi servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor conectado a ',app.get('port'))
})

