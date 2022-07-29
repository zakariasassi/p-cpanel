const db = require('../config/db');
//import models
//import models
const usersmodel = require('../model/Prodacts');




exports.showPage = (req , res) => {
    res.render('../views/pages/Prodacts.ejs');

}


exports.AddnewProdact = (req , res) => {
        res.render('../views/pages/addnewprodact');
}

exports.insert = (req , res) => {
    
    
}