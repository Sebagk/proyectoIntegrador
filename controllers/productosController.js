const db = require("../database/models");
const op = db.Sequelize.Op;
//const { where } = require('sequelize');
const { validationResult } = require('express-validator')

const productosController = {

  index: function (req, res) {
    db.Product.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {association: 'usuario'},
        {association: 'comentarios'}
      ]
    })
      .then(function (data) {
        // return res.send(data)
        return res.render("index", { lista: data });
      })
      .catch(function (error) {
        return console.log(error);
      });
  },

  product: function (req, res) {
    let id = req.params.product
    db.Product.findByPk(id, {
      order: [[{model: db.Comment, as: 'comentarios'}, "createdAt", "DESC"]],
      include: [
        {association: "usuario"},
        {association: "comentarios", include: [{ association: "usuario" }] },
        
      ]
    })
    .then(function (producto) {
      //return res.send(producto)
      return res.render("product", { lista: producto });
    })
    .catch(function (error) {
      return console.log(error);
    });
  },

  productadd: function (req, res) {
    if (req.session.user != undefined) {
      return res.render('productadd')
  }
  else {
      return res.redirect("/users/login");
  }
  },
  
  processProductadd: function (req, res) {
  let form = req.body;
  let errors = validationResult(req);
  //return res.send(form)
    if (errors.isEmpty()) {
      let product = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        imagen: form.imagen,
        id_usuario: req.session.user.id
    };
    db.Product.create(product)
    .then(function(lista){
        return res.redirect("/product/id/" + lista.id)
    })
    .catch(function(error){
        console.log(error);
    })} else {
      // return res.send(errors.mapped());
      return res.render("productadd", {errors: errors.array(), old: req.body});        
    }
  },

  commentProcess: function(req, res){
    let errors = validationResult(req)
    // return res.send(errors)
    let form = req.body
    // return res.send(form)
    if (errors.isEmpty()) {
      db.Comment.create({
        comentario: form.comentario,
        id_usuario: req.session.user.id,
        id_productos: req.params.product}
      )
      .then(function(results){
        return res.redirect('/product/id/' + req.params.product)
      })
      .catch(function(error){
        console.log(error);
    })
    }
    else {
      db.Product.findByPk(req.params.product, {
          include: [
              { association: 'comentarios', include: ['usuario'] },
              { association: 'usuario' }
          ]
      })
      .then(function(producto) {
          return res.render('product', {
              lista: producto,
              errors: errors.array(),
              old: req.body,
          });
      })
      .catch(function(error) {
          console.log(error);
      });
  }
},

  productedit: function(req, res) {
    let form = req.body;
    let asociacion = {
          include: [{association: "usuario" }]
      }
      db.Producto.findByPk(form.id, asociacion)
      .then(function (results) {
        return res.render('productedit', {productos: results});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  producteditInfo: function (req, res) {
    let form = req.body;
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        let ubi = {
            where: {
                id: form.id
            }
        }
        if (req.session.user != undefined) {
            let id = req.session.user.id;

            if (form.idUsuario == id) {
                db.Product.update(form, ubi)
                    .then((result) => {
                        return res.redirect("/products/id/" + form.id)
                    }).catch((err) => {
                        return console.log(err);
                    });
            }
            else {
                return res.redirect("/users/profile/id/" + id);
            }
        }
        else {
            return res.redirect("/users/login");
        }
    }
    else {
        let criterio = {
            include: [
                { association: "usuario" }]
          }
        db.Producto.findByPk(form.id, criterio)
        .then(function (results) {
          return res.render('productedit', {errors: errors.mapped(), old: req.body, productos: results });
        })
        .catch((err) => {
          return console.log(err);
        });
    }
},

  searchresults: function(req, res) {
    let search = req.query.search
    db.Product.findAll({
      where: {[op.or]: [
        {nombre: {[op.like]: `%${search}%`}},
        {descripcion: {[op.like]: `%${search}%`}}
      ]},
      order: [["createdAt", "DESC"]],
      include: [
        {association: "usuario"},
        {association: "comentarios"}
      ]
    })
    .then(function(results){
      // return res.send(results)
      return res.render("searchresults", {
        search: search,
        lista: results
      })
    })
  },
};

module.exports = productosController;
