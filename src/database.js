const mongoose = require('mongoose')
process.env.MONGOBD_URI
mongoose.connect(process.env.MONGOBD_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(db=>console.log('MongoDB conectado'))
.catch(err=>console.error(err))