var utils = require('../utils');
var routeTemplate = require('../templates/routeTemplate');
var fs = require('fs');
module.exports= routeGenerate;


function routeGenerate(requies,routes,app){
    var templateCode=routeTemplate(requies, routes);
    
    fs.writeFile("./route.js", templateCode, function(err) {
    if(err) {
        console.log(err);

    } else {
    console.log("The file route.js was saved!");
    var route = require('../route.js');
            route(app);

    }
}); 

    
}