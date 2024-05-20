const db = require('../database/models')

const db = require('../db/index')

const usuariosController = {
    profile: function(req, res){
        let resultado = db.usuarios[0];
        return res.render('profile', {
            usuario : resultado,
            productos: db.productos
        });
    },
    register : function(req, res){
        return res.render('register');
    },
    login: function(req, res){
        return res.render('login',);
    },
    loginInfo: function(req, res){
        let form = req.body;
        database.productos.create(form)
        .then(function(result){
            return res.redirect('/')
        })
        .catch(error => console.log(error))
    },
    profileedit : function(req, res){
        let resultado = db.usuarios[0];
        return res.render('profileedit',{
            usuario: resultado
        });
    }
}

module.exports = usuariosController