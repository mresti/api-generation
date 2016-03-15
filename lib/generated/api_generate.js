var utils = require('../utils');
var api_template = require('../templates/controllerAPITemplate');
var model_generation= require('./model_generate');
var routes_generation= require('./route_model_generate');
module.exports = apigen;    
function apigen(nombre, atrbts,tipos, app){
   //TODO: Read the JSON Config and change de File for the new atributes. function apigen(nombre, atrbts, app){
    model_generation(nombre, atrbts,tipos);
    routes_generation(nombre, app);
    var post_atr="";
    var put_atr="";
    //TODO Change this for new configuration, get data for atribute list and tipe list
    for (item in atrbts) {
        var atr = atrbts[item];
        post_atr+= "      "+atr+" : req.body."+atr+",\n";
        put_atr+= "      "+nombre+"."+atr+" = req.body."+atr+",\n";        
    }
    post_atr = utils.deleteLastChar(post_atr);
    put_atr= utils.deleteLastChar(put_atr);
    var templateCode = api_template(nombre, post_atr, put_atr);
    utils.createDir("api_controller");
    utils.createFile(nombre+"_controller.js", "api_controller", templateCode);
}

