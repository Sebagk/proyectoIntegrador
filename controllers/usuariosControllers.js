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
                imagen_de_perfil: form.imagen_de_perfil
            };

            db.User.create(user);
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
            db.User.findOne({where: {usuario: req.body.usuario}})
            .then(function(user){
            try {
                if (user===null) throw Error("Usuario no existente")
                if(!bcrypt.compareSync(req.body.password, user.contrasenia))
                throw Error ("Contraseña incorrecta")
            } catch(error) {
                res.render('login', {
                    error: error.message});
            } 

            if (bcrypt.compareSync(req.body.password, user.contrasenia)) {
                req.session.user = user.dataValues;
                if (!req.body.recordarUsuario) {
                    res.cookie( 'userId' , user.dataValues.id, {maxAge: 1000 * 60 * 60 * 7}) 
                }
                res.redirect("/");
            } 
        })
        .catch(function(error){
            console.log(error);
        })
        /*let form = req.body;
        database.User.create(form)
        .then(function(result){
            return res.redirect('/')
        })
        .catch(error => console.log(error))*/
    },
    logout : function(req,res,){
        req.session.destroy();
        //req.session.user = null;
        res.clearCookie('userId');
        res.redirect("/")
    },
    profileedit : function(req, res){
        let resultado = db.usuarios[0];
        return res.render('profileedit',{
            usuario: resultado
        });
    },
    profileeditInfo: function (req,res) {
        
    }
}

module.exports = usuariosController