const db = require('../config/db')


const prodacts = require('../model/Prodacts');
const users = require('../model/User');


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
        username: user[0].username,
        id : user[0].id,
        password: user[0].password,

    });

    console.log(user);

}
exports.exueditadmin = async (req , res) => {
    // Change everyone without a last name to "Doe"
        await users.update({
             username: req.body.usernameedit,
             password : req.body.passwordedit,
        }, {
            where: {
                id: req.params.id,
    }
  });
    
    res.redirect('/admins')
   };

 





   // prodacts opretores




exports.deleteprodact = async (req , res) => {
    console.log(req.params.id);
    await prodacts.destroy({
        where: { id: req.params.id },
      });

      res.redirect('/prodacts');
}



exports.editprodact = async (req , res) => {
    const prodact = await prodacts.findAll({
       where: {
           id :  req.params.id
       }
   }
    );
    
    res.render('../views/pages/editprodact.ejs' ,{ 
        id: prodact[0].id,
        prodactname: prodact[0].prodactname,
        prodactcountry : prodact[0].prodactcountry,
        prodactbarcode:prodact[0].prodactbarcode, 
        prodactdescription : prodact[0].prodactdescription , 
        prodactmade : prodact[0].prodactmade , 
        prodactexpired :  prodact[0].prodactexpired, 


   });

   console.log(prodact);

}
exports.exueditprodact = async (req , res) => {
   // Change everyone without a last name to "Doe"
       await prodacts.update({
        prodactname: req.body.prodactname,
        prodactcountry : req.body.prodactcountry,
        prodactbarcode:req.body.prodactbarcode, 
        prodactdescription : req.body.prodactdescription , 
        prodactmade : req.body.prodactmade , 
        prodactexpired :  req.body.prodactexpired, 
       }, {
           where: {
               id: req.params.id,
   }
 });
   
   res.redirect('/prodacts')
  };









