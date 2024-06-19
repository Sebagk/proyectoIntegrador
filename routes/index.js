var express = require('express');
var router = express.Router();
const productosController = require('../controllers/productosController');
const { body } = require('express-validator');


const commentValidaciones = [
    body('comment').notEmpty().withMessage('El comentario no puede estar vacio').isLength({min: 3}).withMessage('El comentario debe tener al menos 3 caracteres')
]

router.get('/', productosController.index);

router.get('/product/productadd', productosController.productadd);
router.post('/product/productadd', productosController.processProductadd);

router.get('/product/searchresults', productosController.searchresults);
router.get('/product/id/:product', productosController.product);

router.post('/product/id/:product', commentValidaciones, productosController.commentProcess)


module.exports = router;
