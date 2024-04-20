const db = require('../db/index')

const usuariosController = {
    profile: function(req, res){
        let resultado = db;
        return res.render('profile',{
            lista : resultado
        });
    },
    register : function(req, res){
        let resultado = db.usuarios;
        return res.render('register', {
            lista : resultado 
        });
    },
    login: function(req, res){
        return res.render('login')
    },
    profileedit : function(req, res){
        let resultado = db.usuarios
        return res.render('profileedit',{
            lista: resultado
        })
    }
}

module.exports = usuariosController