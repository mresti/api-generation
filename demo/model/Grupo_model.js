var mongoose= require('mongoose'),
Schema= mongoose.Schema;
var grupo= new Schema({
   "nombre" : String,
   "rol" : String,
   "leader" : String
});
module.exports= mongoose.model('Grupo',grupo);