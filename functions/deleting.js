const { Where } = require('sequelize/types/utils');
const db = require('../config/db')


const prodacts = require('../model/Prodacts');
const users = require('../model/User')






exports.deleteadmin = async (req , res) => {
    console.log(req.params.id);
    await users.destroy({
        where: { id: req.params.id },
      });

      res.redirect('/admins');
}



exports.editadmin = async (req , res) => {
     const user = await users.findAll({
        where: {
            id :  req.params.id
        }
    }
     );
     
     res.render('../views/pages/editadmin.ejs' ,{ 
        data: user
    
    });

}