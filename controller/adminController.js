const db = require('../config/db');


//import models
const usersmodel = require('../model/User');


 
exports.showPage = (req , res) => {
    res.render('../views/pages/Admins.ejs'  , {
        data : {},
    })   
}


exports.showPageAddAdmin = (req , res) => {
    res.render('../views/pages/addnewadmin.ejs')
}

exports.addNewAdmin = (req , res) => {
    
}