var mongoose = require('mongoose');
 var Grupo=require('../model/grupo_model');
exports.findAllGrupo= function(req,res){
Grupo.find(function(err,grupo){
      if(err)
            console.log("no se han encontrado Grupo");
        else
             res.status(200).jsonp(grupo);
    });
}
exports.addGrupo= function(req, res){
    console.log('POST');
    console.log(req.body);
    vargrupo= new Grupo({
      nombre : req.body.nombre,
      rol : req.body.rol,
      leader : req.body.leader
    });
    grupo.save(function(err, speaker){
        if(err)
            res.send(500, err.message);
        else
            res.status(200).jsonp(grupo);
    });
}
exports.updateGrupo=function(req,res){
    console.log('PUT');
    console.log(req.param.id);
    Grupo.findById(req.params.id, function(err,grupo){
      Grupo.nombre = req.body.nombre,
      Grupo.rol = req.body.rol,
      Grupo.leader = req.body.leader
    grupo.save(function(err){
            if(err)
                res.send(500,err.message);
            else
                res.status(200).jsonp(grupo);
        });
    });
}
exports .deleteGrupo=function(req, res){
    Grupo.findById(req.params.id, function(err, grupo){
        grupo.remove(function(err){
            if(err)
                res.send(500,err.message);
            else
                res.status(200);
        });
    });
}
