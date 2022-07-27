const { INTEGER } = require("sequelize");
const { TEXT } = require("sequelize");
const { STRING } = require("sequelize");
const { Sequelize, DataTypes } = require("sequelize")
const db = require('../config/db');





const prodact = db.define('prodacts' , {
    id:{
        type:INTEGER ,
        primaryKey : true,
        autoIncrement:true,
    },
    prodactname : {
        type:STRING,
    },
    prodactbarcode :  {
        type : INTEGER , 
    },
    dateend :{
        type:STRING,
    },
    prodactmade : {
        type:TEXT,
    },
    prodactdescription  : {
        type:TEXT,
    },
    countrt : {
        type:STRING
    }

},{
    tableName: "prodacts",
    timestamps: "falsr",
    freezeTableName:true,

})


module.exports = prodact;