var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const usuariosController = require('../controllers/usuariosControllers');
const db = require('../database/models')


const validaciones = [
    body ("email").isEmail().withMessage("Debes completar el campo de email")
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
    body ("usuario").notEmpty().withMessage("Debes completar el campo de nombre"),
    body ("contrasenia").notEmpty().withMessage("Debes completar el campo de contraseña").isLength({min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),
    body ("fecha_nacimiento").notEmpty().withMessage("Debes completar el campo de fecha nacimiento"),
    body ("dni").isInt().withMessage("Debes completar el campo de documento")
]

/* GET users listing. */
router.get('/profile/id/:id', usuariosController.profile);

router.get('/register', usuariosController.register);
router.post('/register', validaciones, usuariosController.registerInfo);

router.get('/login', usuariosController.login);
router.post('/login', usuariosController.loginInfo);

router.get('/profileedit', usuariosController.profileedit);
router.post('/profileedit', usuariosController.profileeditInfo);

router.post('/logout', usuariosController.logout);


module.exports = router;
