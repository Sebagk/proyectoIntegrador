var express = require('express');
const usuariosController = require('../controllers/usuariosControllers');
var router = express.Router();

/* GET users listing. */
router.get('/profile', usuariosController.profile);
router.get('/registrarse', usuariosController.register);
router.get('/login', usuariosController.login);
router.get('/profileedit', usuariosController.profileedit);

module.exports = router;
