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
            lista : resultado,
        });
    },
    product : function(req, res){
        return res.render('product');
    },
    productadd: function(req, res){
        return res.render('productadd');
    },
};

module.exports = productosController;
