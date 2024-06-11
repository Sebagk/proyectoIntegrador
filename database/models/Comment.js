module.exports = function (sequelize, dataTypes) {
  let alias = "Comment";

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    comentario: {
      type: dataTypes.STRING,
    },
    id_usuario: {
      type: dataTypes.INTEGER,
    },
    id_productos: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "comentarios",
    timestamps: false,
    underscored: true,
  };

  let Comment = sequelize.define(alias, cols, config); 
    Comment.associate = function(models) {
      Comment.belongsTo(models.User, {
          as: "usuario",
          foreignKey: "id_usuario",
          timestamps: false
      })
      Comment.belongsTo(models.Product, {
          as: "productos",
          foreignKey: "id_productos",
          timestamps: false
      })
  }
  return Comment;
};
