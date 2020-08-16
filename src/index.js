let express = require('express')
let path = require('path')
let app = express()
//configuracion
app.set('port', process.env.PORT || 4000) //servidor
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
//mis rutas
app.use(require('./rutas/index'))

app.use(express.static(path.join(__dirname,'public')))



///Abrir mi servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor conectado a ',app.get('port'))
})

