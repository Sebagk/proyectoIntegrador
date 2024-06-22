const db = require('../database/models')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
//const { Association } = require('sequelize');

const usuariosController = {

    profile: function(req, res){
        let id = req.params.id ;
        db.User.findByPk(id, {
            include: [
                {association: "productos"}
            ]})
        .then(function (usuario){
            //return res.send(usuario)
            return res.render("profile", {usuario: usuario})
        })
        .catch(function (error) {
            return console.log(error);
          });
        
        /*let resultado = db.usuarios[0];
        return res.render('profile', {
            usuario : resultado,
            productos: db.productos
        })*/;
    },

    register : function(req, res){
        if (req.session.user == undefined){
            return res.render('register');
        }
        else{
            res.redirect("/users/profile")
        };   
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
            db.User.create(user)
            .then(function(results){
                return res.redirect("/")
            })
            .catch(function(e){
                console.log(e);
            })} else {
            return res.render('register', {errors: errors.array(), 
                old: req.body
            });
        }
    },
    
    login: function(req, res){
        if (req.session.user == undefined){
            return res.render('login');
        }
        else{
            res.redirect("/users/profile/" + req.session.user.id)
        }
    },

    processLogin: function(req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()){
            //procesar el controlador normalmente
            db.User.findOne({
                where: [{usuario: req.body.usuario}]
            })
            .then(function (usuarioEncontrado) {
                req.session.user = usuarioEncontrado
                if(req.body.recordarme != undefined){
                    res.cookie('userId', usuarioEncontrado.id , {maxAge: 1000*60*123123123})
                }
                return res.redirect('/')
            })}
    },

    logout : function(req,res,){
        req.session.destroy();
        //req.session.user = null;
        res.clearCookie('userId');
        res.redirect("/")
    },

    profileedit : function(req, res){
        let id = req.session.user.id  
        //cambiar la condicion de aca abajo para que tambien coincida el id
        if (req.session.user != undefined) {  
            db.User.findByPk(id)
            .then(function (resultado){
                return res.render('profileedit', {usuario: resultado})
            })
            .catch(function(e){
                console.log(e);
            })
        }
        else {
            return res.redirect("/");
        }
    },

    profileeditInfo: function (req,res) {
        let id = req.session.user.id;
        let form = req.body;
        let errors = validationResult(req);
        //return res.send(errors)
        if (errors.isEmpty()){
            let user = {
                usuario: form.usuario,
                email: form.email,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                fecha_nacimiento: form.fecha_nacimiento,
                dni: form.dni,
                imagen_de_perfil: form.imagen_de_perfil

        };
        db.User.update(user, {where: {id:id}})
        .then(function(results){
            return res.redirect(`/users/id/${id}`);
        })
        .catch(function(e){
            console.log(e);
        }) 

    }else {
        return res.render('profileedit', {errors: errors.array(), 
            old: req.body
        });
    }
}}

module.exports = usuariosController