var mongoose= require('mongoose'),
Schema= mongoose.Schema;
var usuario= new Schema({
   "nombre" : String,
   "apellido" : String,
   "Pais" : String
});
module.exports= mongoose.model('Usuario',usuario);