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
    prodactcountry : {
        type:STRING
    },
    prodactbarcode :  {
        type : STRING , 
    },
    prodactdescription  : {
        type:TEXT,
    },
    prodactmade : {
        type:TEXT,
    },
    prodactexpired	 :{
        type:STRING,
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
      },

},{
    tableName: "prodacts",
    timestamps: "false",
    freezeTableName:true,

})


module.exports = prodact;