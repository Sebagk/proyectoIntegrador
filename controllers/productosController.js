const db = require('../db/index');

const productosController = { 
    index: function(req, res){
        let resultado = [];
        let numComentarios = 3;
        for (let i = 0; i < db.productos.length; i++) {
            resultado.push(db.productos[i]);
        }
        return res.render('index',{
            mensaje : 'Novedades',
            lista : resultado
        });       
    },
    product: function(req, res){
        let idProduct = req.params.product
        let resultado = db.productos[idProduct]
        return res.render('product', {
            lista: resultado
        });
    },
    productadd: function(req, res){
        return res.render('productadd');
    },
};

module.exports = productosController;
