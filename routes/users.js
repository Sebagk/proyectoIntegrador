var express = require('express');
const usuariosController = require('../controllers/usuariosControllers');
var router = express.Router();
const { body } = require('express-validator');

const validations = [
    body ("email").notEmpty().isEmail().withMessage("Debes completar el campo de email").bail(),
    body ("nombre").notEmpty().isLength({ min: 3, max: 13 }).withMessage("Debes completar el campo de nombre").bail(),
    body ("contraseña").notEmpty().withMessage("Debes completar el campo de contraseña").bail(),
    body ("nacimiento").notEmpty().withMessage("Debes completar el campo de fecha nacimiento").bail(),
    body ("number").notEmpty().isLength({ min: 8, max: 8 }).isInt().withMessage("Debes completar el campo de documento").bail()
]

/* GET users listing. */
router.get('/profile', usuariosController.profile);

router.get('/register', usuariosController.register);
router.post('/register', usuariosController.registerInfo);

router.get('/login', usuariosController.login);
router.post('/login', usuariosController.loginInfo);

router.get('/profileedit', usuariosController.profileedit);



module.exports = router;
