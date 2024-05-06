module.exports = function (sequelize, dataTypes){
    let alias = 'Comment'

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        texto_comentario:{
            type: dataTypes.STRING,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
        id_productos:{
            type: dataTypes.INTEGER,
        }
        }    
    }

    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true

    }


    let Comment = sequelize.define(alias, cols, config)
    return Comment
