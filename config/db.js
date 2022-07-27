const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('brapp', 'root', '', {
    host: 'localhost',
    dialect:'mysql' 
  });




  module.exports = sequelize;