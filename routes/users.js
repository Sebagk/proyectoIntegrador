var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const usuariosController = require('../controllers/usuariosControllers');
const db = require('../database/models');
const bcrypt = require('bcryptjs');


const validaciones = [
    body ("email").isEmail().withMessage("Debes completar el campo de Email")
    .custom(function(value){
        return db.User.findOne({
            where: {email: value},
        })
        .then(function(user){
            if(user){
                throw new Error('El email ingresado ya existe.');
            }
        })
    }),
    body("usuario").notEmpty().withMessage("Debes completar el campo de Nombre"),
    body("contrasenia").notEmpty().withMessage("Debes completar el campo de Contraseña").isLength({min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),
    body("fecha_nacimiento").notEmpty().withMessage("Debes completar el campo de Fecha de Nacimiento"),
    body("dni").isInt().withMessage("Debes completar el campo de Documento"),
    body("imagen_de_perfil").notEmpty().withMessage("Debes completar el campo Imagen")
]

const loginValidaciones = [
    body('usuario').notEmpty().withMessage('Complete el campo de usuario')
    .custom(function(value){
        return db.User.findOne({
            where: {usuario: value }
        })
        .then(function(user) {
            if(!user){
                throw new Error('el usuario no se encuentra registrado')
            }
        })
    }),
    body('password')
        .notEmpty().withMessage('El campo Contraseña es obligatorio.').bail()
        .custom(function(value, {req}){

            return db.User.findOne({
                where: { usuario: req.body.usuario }})
            .then(function(user){
                if(user != undefined){ 

                    let check = bcrypt.compareSync(req.body.password, user.contrasenia);
                    if(!check){
                        throw new Error ('La contraseña es incorrecta')
                    }
                }
            })

    })
]

const editValidations = [
    body ("email").isEmail().withMessage("Debes completar el campo de Email")
    .custom(function(value){
        return db.User.findOne({
            where: {email: value},
        })
        .then(function(user){
            if(user){
                throw new Error('El email ingresado ya existe.');
            }
        })
    }),
    body('usuario').notEmpty().withMessage("Debes completar el campo de Usuario"),
    body('contrasenia').notEmpty().withMessage("Debes completar el campo de Contraseña").isLength({min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),
    body("fecha_nacimiento").notEmpty().withMessage("Debes completar el campo de Fecha de Nacimiento"),
    body("dni").isInt().withMessage("Debes completar el campo de Documento"),
]

/* GET users listing. */
router.get('/id/:id', usuariosController.profile);

router.get('/register', usuariosController.register);
router.post('/register', validaciones, usuariosController.registerInfo);

router.get('/login', usuariosController.login);//mostrar vista de Login 
router.post('/login', loginValidaciones, usuariosController.processLogin);//Procesar Login

router.get('/profileedit', usuariosController.profileedit);
router.post('/profileedit', validaciones, usuariosController.profileeditInfo);

router.post('/logout', usuariosController.logout);


module.exports = router;
