const db = require("../database/models");
const op = db.Sequelize.Op;
const { where } = require('sequelize');

const productosController = {
  index: function (req, res) {
    db.Product.findAll({
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
    return res.render("productadd", {
      usuario: db.usuarios[0],
    });
  },
  searchresults: function (req, res) {
    // let resultado = [];
    // for (let i = 0; i < db.productos.length; i++) {
    //   resultado.push(db.productos[i]);
    // }
    // return res.render("searchresults", {
    //   lista: resultado,
    // });
    let search = req.query.search
    db.Product.findAll({
      where: {[op.or]: [
        {nombre: {[op.like]: `%${search}%`}},
        {descripcion: {[op.like]: `%${search}%`}}
      ]},
      // order: [["createdAt", "DESC"]]
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
