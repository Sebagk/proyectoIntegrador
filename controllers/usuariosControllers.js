const db = require('../database/models')


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
    registerInfo: function(req, res){
        let form = req.body;
        database.User.create(form)
        .then(function(result){
            return res.redirect('/')
        })
        .catch(error => console.log(error))

    },
    login: function(req, res){
        return res.render('login',);
    },
    loginInfo: function(req, res){
        let form = req.body;
        database.User.create(form)
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