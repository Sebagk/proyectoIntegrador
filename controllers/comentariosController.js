const db = require('../db/index')


const comentariosController = {
    product : function(req, res){
        let idProducto = req.params.id
        let resultado = [];
        for (let i = 0; i < db.productos[idProducto].comentarios.length; i++) {
            resultado.push(db.productos[idProducto].comentarios[i])
        }
        return res.render('product', {
            lista: resultado
        });
    }
}

module.exports = comentariosController
