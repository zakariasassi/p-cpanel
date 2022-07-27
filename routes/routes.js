const express = require('express');
const router = express.Router();

//import contoller 
const authController = require('../controller/auth');
const adminController = require('../controller/adminController');
const prodactController = require('../controller/prodactController');

router.get('/home' , (req , res) => {
    res.render('../views/pages/Home.ejs');
});
router.get('/' , authController.loginScreen);
router.get('/signup' , authController.signup);

router.post('/login' , authController.loginuser);
router.post('/createuser' , authController.creatuser);




router.get('/admins' ,  adminController.showPage);



router.get('/prodacts' ,  prodactController.showPage);
router.get('/newprodact' , prodactController.addNewProdact)





router.get('/logout' , (res , req) => {
     res.redirect('/');
})

module.exports = router;