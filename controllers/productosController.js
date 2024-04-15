const db = require('../db/index')

const productosController = { 
    index: function(req, res){
        return res.render('index')
    },
    product : function(req, res){
        return res.render('product')
    },
    productadd: function(req, res){
        return res.render('productadd')
    },
}

module.exports = productosController