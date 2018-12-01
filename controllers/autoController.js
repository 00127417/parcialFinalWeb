var mongoose = require('mongoose'),
    autoModel = require('../models/auto');

autoController = {};

autoController.create = function(req,res){
    let data ={
        nombre: req.body.nombre,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    }

    let nuevoAuto = new autoModel(data);
    nuevoAuto.save(function(err,res){
        if(err){
            res.status(500);
            res.json({
                ok: false
            });
        }else{
            res.json({
                ok: true,
                nuevo: data
            })
        }
    });
};

autoController.getAll = function(req,res){
    autoModel.find({},function(err, autos){
        if(err){
            res.status(500);
            res.json({
                ok: false
            });
        }else{
            res.json({
                ok: true,
                autos: autos
            })
        }
    });
};


autoController.getOne = function(req,res){
    autoModel.findOne({_id: req.params.id},function(err, auto){
        if(err){
            res.status(500);
            res.json({
                ok: false
            });
        }else{
            res.json({
                ok: true,
                auto: auto
            })
        }
    });
};


autoController.update = function(req,res){
    let data ={
        nombre: req.body.nombre,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    }
    autoModel.findByIdAndUpdate(req.params.id,data,function(err, nuevo){
        if(err){
            res.status(500);
            res.json({
                ok: false
            });
        }else{
            res.json({
                ok: true,
                nuevo: nuevo
            })
        }
    });
};


autoController.delete = function(req,res){
    autoModel.findByIdAndDelete(req.params.id,function(err, old){
        if(err){
            res.status(500);
            res.json({
                ok: false
            });
        }else{
            res.json({
                ok: true,
                viejo: old
            })
        }
    });
};

module.exports = autoController;