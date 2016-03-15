var utils = require('../utils');
var routesTemplate = require('../templates/routeModelTemplate');

module.exports= routeGenerate;


function routeGenerate(name,app){
    var templateCode=routesTemplate(name);
    console.log(templateCode);
    utils.createDir("routes");
    utils.createFile(name+"_route.js", "routes", templateCode);   
}