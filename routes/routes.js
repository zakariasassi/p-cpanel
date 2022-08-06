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
router.get('./editadmin/:id' , opretores.editadmin);



router.get('/prodacts' ,  prodactController.showPage);
router.get('/newprodact' , prodactController.AddnewProdact)
router.post('/addprodact' , prodactController.insert)






router.get('/logout' , (req , res) => {
    // req.cookies.set('ccess-token', {expires: Date.now()});
    // res.clearCookie('access-token' , {path : '../views/pages/login.ejs'})
    res.render('../views/pages/login.ejs' , {
        message : ""
    });

})

module.exports = router;