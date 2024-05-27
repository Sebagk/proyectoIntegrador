module.exports = function (sequelize, dataTypes){
    let alias = 'Product'

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        texto_imagen:{
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
        timestamps: true,
        underscored: true

    }


    let Product = sequelize.define(alias, cols, config)
    return Product
}