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
    // let errors = validationResult(req)
    // let form = req.body
    // res.send(form)
    // if (errors.isEmpty()) {
    //   db.Comment.create({
    //     lista: form.comment,
    //     id_usuario: req.session.user.id,
    //     id_productos: req.params.product}
    //   )
    //   .then(function(results){
    //     return res.render('/product/id/' + req.params.product)
    //   })
    // }
    // else{
    //   return res.render('register', {errors: errors.array(), 
    //     old: req.body
    // });
    // }

  },

  searchresults: function (req, res) {
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
