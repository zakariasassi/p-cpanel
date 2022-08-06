const { Sequelize, DataTypes } = require("sequelize")
const db = require('../config/db');


const user = db.define ('users' , {
    id: {
        type : DataTypes.STRING,
        primaryKey: true,
        autoIncrement:true,
    },
    username: {
        type : DataTypes.STRING,
        
    },
    password: {
        type : DataTypes.STRING,
        
    }

},{
    tableName:'users',
    timestamps:false,
    freezeTableName:true,

    
})


module.exports = user;