const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('brapp', 'root', '', {
    host: 'localhost',
    dialect:'mysql' ,
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