module.exports = function (sequelize, dataTypes){
    let alias = 'Product'

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        id_usuario: {
            type: dataTypes.INTEGER
        }
        }    
    let config = {
        tableName: 'productos',
        timestamps: false,
        underscored: true
    }


    const Product = sequelize.define(alias, cols, config)
    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "id_usuario",
            timestamps: false
        })
        Product.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "id_productos",
            timestamps: false
        })
    }
    return Product
}
