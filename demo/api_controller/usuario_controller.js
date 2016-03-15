var mongoose = require('mongoose');
 var Usuario=require('../model/usuario_model');
exports.findAllUsuario= function(req,res){
Usuario.find(function(err,usuario){
      if(err)
            console.log("no se han encontrado Usuario");
        else
             res.status(200).jsonp(usuario);
    });
}
exports.addUsuario= function(req, res){
    console.log('POST');
    console.log(req.body);
    varusuario= new Usuario({
      nombre : req.body.nombre,
      apellido : req.body.apellido,
      Pais : req.body.Pais
    });
    usuario.save(function(err, speaker){
        if(err)
            res.send(500, err.message);
        else
            res.status(200).jsonp(usuario);
    });
}
exports.updateUsuario=function(req,res){
    console.log('PUT');
    console.log(req.param.id);
    Usuario.findById(req.params.id, function(err,usuario){
      usuario.nombre = req.body.nombre,
      usuario.apellido = req.body.apellido,
      usuario.Pais = req.body.Pais
    usuario.save(function(err){
            if(err)
                res.send(500,err.message);
            else
                res.status(200).jsonp(usuario);
        });
    });
}
exports .deleteUsuario=function(req, res){
    Usuario.findById(req.params.id, function(err, usuario){
        usuario.remove(function(err){
            if(err)
                res.send(500,err.message);
            else
                res.status(200);
        });
    });
}
