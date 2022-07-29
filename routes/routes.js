const express = require('express');
const router = express.Router();
const { createToken,validetoken} = require('../jwt');
const cookie = require('cookie-parser')
//import contoller 
const authController = require('../controller/auth');
const adminController = require('../controller/adminController');
const prodactController = require('../controller/prodactController');

router.get('/home',validetoken , (req , res) => {
    res.render('../views/pages/Home.ejs');
});
router.get('/' ,validetoken ,authController.loginScreen);
router.get('/signup' , authController.signup);

router.post('/login' , authController.loginuser);
router.post('/createuser' , authController.creatuser);




router.get('/admins' ,validetoken,  adminController.showPage);
router.get('/addNewAdmin' , validetoken, adminController.addnewAdmin);
router.post('/admin' , validetoken,adminController.insert)





router.get('/prodacts' ,  prodactController.showPage);
router.get('/newprodact' , prodactController.AddnewProdact)
router.post('/addprodact' , prodactController.insert)






router.get('/logout' , (res , req) => {
     res.redirect('/');
})

module.exports = router;