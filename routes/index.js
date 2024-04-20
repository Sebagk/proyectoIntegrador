var express = require('express');
var router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.index);
router.get('/product/:product', productosController.product);
router.get('/product/productadd', productosController.productadd);
router.get('/product/searchresults', productosController.searchresults);


module.exports = router;
