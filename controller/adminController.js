const db = require('../config/db');


//import models
const usersmodel = require('../model/User');


 
exports.showPage = (req , res) => {
    res.render('../views/pages/Admins.ejs'  , {
        data : {},
    })   
}


exports.addnewAdmin = (req , res) => {
    res.render('../views/pages/addnewadmin.ejs')
}

exports.insert = (req , res) => {
    
}