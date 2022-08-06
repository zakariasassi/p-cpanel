const db = require('../config/db');




//import models
const prodacts = require('../model/Prodacts');




exports.showPage = async (req , res) => {
   const prodact =   await prodacts.findAll();

   res.render('../views/pages/Prodacts.ejs' , {
    data:prodact,
})
      




}


exports.AddnewProdact = (req , res) => {
        res.render('../views/pages/addnewprodact');
}

exports.insert =  async (req , res) => {
    
    const  { prodactname , prodactcountry , prodactdescription , prodacrmade  , prodactbarcode , prodactexpired } = req.body;

    await  Prodact.create({
        prodactname : prodactname,
        prodactcountry : prodactcountry ,
        prodactbarcode : prodactbarcode ,
        prodactdescription : prodactdescription,
        prodactmade : prodacrmade , 
        prodactexpired :prodactexpired,
    }).then ( res.redirect('/prodacts') ).catch((err) =>  {
        if(err) {
            console.log(err);
        }
    })

    
}