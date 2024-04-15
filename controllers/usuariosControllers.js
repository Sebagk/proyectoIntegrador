const db = require('../db/index')

const usuariosController = {
    profile: function(req, res){
        return res.render('profile')
    },
    register : function(req, res){
        return res.render('register')
    },
    login: function(req, res){
        return res.render('login')
    },
    profileedit : function(req, res){
        return res.render('profileedit')
    }
}

module.exports = usuariosController