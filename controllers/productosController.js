const db = require('../database/models')


const productosController = { 
    index: function(req, res){
        db.Product.findAll()
            .then(function(data){
                return res.render("index", {lista : data})
            })
            .catch(function(error){
                return console.log(error);
            })
    },
    product: function(req, res){
        /*let idProduct = req.params.product
        let resultado = db.productos[idProduct]
        return res.render('product', {
            lista: resultado
        });*/
        
        db.Product.findByPk(req.params.product, {include: [{association:"comentarios"}, {association:"usuario"}]})
            .then(function(producto){
                res.render('product', {lista:producto});
            })
    },
    productadd: function(req, res){
        return res.render('productadd', {
            usuario: db.usuarios[0],
        });
    },
    searchresults: function(req, res){
        let resultado = [];
        for (let i = 0; i < db.productos.length; i++) {
            resultado.push(db.productos[i]);
        }
        return res.render('searchresults',{
            lista : resultado
        });
    }       
};

module.exports = productosController;
