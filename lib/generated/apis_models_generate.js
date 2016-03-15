var api_generate = require('./api_generate');
var utils = require('../utils');
var route_generate = require('./route_generate');

module.exports = function(app){

    var models = utils.getModels();
    var nombres="";
    var requires_model="";
    var routes_model="";
    for (item in models) {
       var nombre = models[item]["nombre"];
       var atributos = models[item]["atributos"];
       var tipos = models[item]["tipos"];   
       routes_model+="route_"+nombre+"(app);\n";
       requires_model+="var route_"+nombre+" = require('./routes/"+nombre+"_route.js');\n"    
       api_generate(nombre, atributos, tipos, app);
    }
    route_generate(requires_model,routes_model,app);
}