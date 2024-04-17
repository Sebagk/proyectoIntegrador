var express = require('express');
var router = express.Router();
const commentsController = require('../controllers/comentariosController');

router.get('/comments/:id', commentsController.product);

module.exports = router