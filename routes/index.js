var express = require('express');
var router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.index);
router.get('/product', productosController.product);
router.get('/productadd', productosController.productadd);

module.exports = router;
