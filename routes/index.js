var express = require('express');
var router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.index);
router.get('/product/productadd', productosController.productadd);
router.get('/product/searchresults', productosController.searchresults);
router.get('/product/:product', productosController.product);



module.exports = router;
