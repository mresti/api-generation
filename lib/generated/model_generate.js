var utils = require('../utils');
var modelTemplate = require('../templates/modelTemplate');
module.exports = modelgen;    

function modelgen(name, atrbts, tipos){
    var atributes="";
    for (item in atrbts) {
        var atribute = atrbts[item];
        var type = utils.ucFirst(tipos[item]);
        
        atributes+="   \""+atribute+"\" : "+type+",\n"   ;
    }

    atributes = utils.deleteLastChar(atributes);    
    var templateCode = modelTemplate(name,atributes);
        
    utils.createDir("model");
    utils.createFile(name+"_model.js","model", templateCode);
}
