var express = require('express');
var router = express.Router();
const productosController = require('../controllers/productosController');
const { body } = require('express-validator');

const productValidaciones = [
    body('nombre').notEmpty().withMessage('El campo Nombre es obligatorio.'),
    body('descripcion').notEmpty().withMessage('El campo Descripción es obligatorio.'),
    body('imagen').notEmpty().withMessage('El campo Imagen es obligatorio')
]

const commentValidaciones = [
    body('comment').notEmpty().withMessage('El comentario no puede estar vacio').isLength({min: 3}).withMessage('El comentario debe tener al menos 3 caracteres')
]


router.get('/', productosController.index);

router.get('/productadd', productosController.productadd);
router.post('/productadd', productValidaciones, productosController.processProductadd);



router.get('/searchresults', productosController.searchresults);
router.get('/id/:product', productosController.product);

router.post('/id/:product', commentValidaciones, productosController.commentProcess)


module.exports = router;
