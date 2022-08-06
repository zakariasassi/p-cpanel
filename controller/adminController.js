const db = require('../config/db');


//import models
const usersmodel = require('../model/User');


 
exports.showPage = async (req , res) => {
    const user =   await usersmodel.findAll();

    res.render('../views/pages/Admins.ejs' , {
             data:user,
        }); 
}


exports.addnewAdmin =  (req , res) => {
        res.render('../views/pages/addnewadmin.ejs')
}

exports.insert =  async(req , res) => {
    const  { adminname , password  } = req.body;

    await  usersmodel.create({
        username : adminname,
        password : password ,
    
    }).then ( res.redirect('/admins') ).catch((err) =>  {
        if(err) {
            console.log(err);
        }
    })
}