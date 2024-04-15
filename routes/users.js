var express = require('express');
const usuariosController = require('../controllers/usuariosControllers');
var router = express.Router();

/* GET users listing. */
router.get('/usuarios', usuariosController) 

module.exports = router;
