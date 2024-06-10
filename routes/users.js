var express = require('express');
const usuariosController = require('../controllers/usuariosControllers');
var router = express.Router();
const { body } = require('express-validator');

/* GET users listing. */
router.get('/profile', usuariosController.profile);

router.get('/register', usuariosController.register);
router.post('/register', usuariosController.registerInfo);

router.get('/login', usuariosController.login);
router.post('/login', usuariosController.loginInfo);

router.get('/profileedit', usuariosController.profileedit);



module.exports = router;
