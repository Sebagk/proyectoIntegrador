const db = require('../database/models')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const usuariosController = {
    profile: function(req, res){
        let resultado = db.usuarios[0];
        return res.render('profile', {
            usuario : resultado,
            productos: db.productos
        });
    },
    register : function(req, res){
        if (req.session.user == undefined){
            return res.render('register');
        }
        else{
            res.redirect("/users/profile")
        }
        
    },
    registerInfo: function(req, res){

        let errors = validationResult(req);
        let form = req.body
        // res.send(errors)

        if (errors.isEmpty()) {            
            let user = {
                usuario: form.usuario,
                email: form.email,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                fecha_nacimiento: form.fecha_nacimiento,
                dni: form.dni,
                imagen_de_perfil: form.im
            };

            userId = db.User.create(user);
            res.redirect("/")
        } 
        else {
            return res.render('register', {errors: errors.array(), 
                old: req.body
            }) ;
        }
        // let form = req.body;
        // database.User.create(form)
        // .then(function(result){
        //     return res.redirect('/')
        // })
        // .catch(error => console.log(error))

    },
    login: function(req, res){
        if (req.session.user == undefined){
            return res.render('login');
        }
        else{
            res.redirect("/users/profile")
        }
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