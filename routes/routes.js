const express = require('express');
const router = express.Router();
const { sign , verify } = require("jsonwebtoken")
const { createToken,validetoken} = require('../jwt');
const cookie = require('cookie-parser')
//import contoller 
const authController = require('../controller/auth');
const adminController = require('../controller/adminController');
const prodactController = require('../controller/prodactController');
const opretores = require('../functions/deleting');
const { json } = require('body-parser');
router.get('/home', (req , res) => {
    

    if(req.cookies['access-token']) {
        const accessToken = req.cookies['access-token'];
        const validtoken   =  verify(accessToken , "applictionsecret");
        if(validtoken) {
            res.render('../views/pages/Home.ejs' , {
                
            });
        }else{
            res.render('../views/pages/login.ejs' , {
                message : ""
            });
        }
    }else {
        res.render('../views/pages/login.ejs' , {
            message : ""
        });
    }

        



});

router.get('/'  , authController.loginScreen);
router.get('/signup' , authController.signup);

router.post('/login' , authController.loginuser);
router.post('/createuser' , authController.creatuser);




router.get('/admins' ,validetoken,  adminController.showPage);
router.get('/addNewAdmin' , validetoken, adminController.addnewAdmin);
router.post('/addadmin' , validetoken,adminController.insert)
router.get( '/deleteadmin/:id' ,  opretores.deleteadmin)
router.get('/editadmin/:id' , opretores.editadmin);  
router.post('/excedit/:id' ,  opretores.exueditadmin);


router.get('/prodacts' ,  prodactController.showPage);
router.get('/newprodact' , prodactController.AddnewProdact)
router.post('/addprodact' , prodactController.insert)
router.get( '/deleteprodact/:id' ,  opretores.deleteprodact)
router.get('/editprodact/:id' , opretores.editprodact);  
router.post('/exceditprodact/:id' ,  opretores.exueditprodact);





router.get('/logout' , (req , res) => {
    // req.cookies.set('ccess-token', {expires: Date.now()});
    // res.clearCookie('access-token' , {path : '../views/pages/login.ejs'})
    res.clearCookie("access-token");

    res.redirect('/');
    res.end();



})











/*
Hera we Bot api routers for mbile application 
functions.
any rout come from mobile applicton will be hear 
*/

const prodacts = require('../model/Prodacts')
router.post('/getdata' ,  async (req , res ) => {
    const {barcoenumber} = req.body

    var prodact = await prodacts.findOne({
        where: {
            prodactbarcode :  barcoenumber,
        }})
        if(prodact) {
           await res.json({
                message:"your data is get",
                success : true,
                prodactname : prodact.prodactname,
                prodactbarcode : prodact.prodactbarcode,
                prodactcountry : prodact.prodactcountry,
                prodactdescription : prodact.prodactdescription,
                prodactmade : prodact.prodactmade,
                prodactexpired : prodact.prodactexpired,
                updated_at : prodact.updated_at,
            })
         
            console.log(json(prodact));
        }else{
            res.json(
                {
                    message:"قد يكون هذا المنتج غيد مدرج في قاعدة البيانات يرجي التحقق",
                    success : false,
                }
            )

        }

})

module.exports = router;