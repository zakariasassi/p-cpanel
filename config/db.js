const {Sequelize} = require('sequelize');



const sequelize = new Sequelize('brapp', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql' , 
    port: 8889,
    define: {
    timestamps: false
  }
  });


  if (sequelize) {
    console.log("DB True");
  }else{
    console.log("DB False"); 
  }



  module.exports = sequelize;