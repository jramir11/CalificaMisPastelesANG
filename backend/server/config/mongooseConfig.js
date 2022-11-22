const mongoose = require('mongoose');
//para conectarnos o crear la BD
mongoose.connect('mongodb://0.0.0.0:27017/PastelesDB', {
    useNewUrlParser: true, useUnifiedTopology:true
})
.then(()=> console.log('se conecto a la BD'))
.catch((error)=> console.log(error))
module.exports = mongoose;