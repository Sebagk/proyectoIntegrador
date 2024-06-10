module.exports = function (sequelize, dataTypes){
    let alias = 'User'

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING,
        },
        contraseña:{
            type: dataTypes.STRING,
        },
        fecha_nacimiento:{
            type: dataTypes.DATE,
        },
        dni:{
            type: dataTypes.INTEGER,
        },
        imagen_de_perfil:{
            type: dataTypes.STRING,
        }
        }    
    

    let config = {
        tableName: 'usuario',
        timestamps: false,
        underscored: true

    }


    let User = sequelize.define(alias, cols, config)
    return User
}