module.exports = function (sequelize, dataTypes){
    let alias = 'User'

    let cols = {
        //poner las columnas de las tablas hechas en el SQL
    
    }

    let config = {
        tableName: '',
        timestamps: true,
        underscored: true

    }


    let User = sequelize.define(alias, cols, config)
    return User
}