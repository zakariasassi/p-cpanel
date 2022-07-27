const db = require('../config/db');


//import models
const usersmodel = require('../model/User');







exports.loginScreen  = (req , res) =>  {
    res.render('../views/pages/login.ejs' , {
        message : ""
    })
}

exports.signup  = (req , res) =>  {
    res.render('../views/pages/signup.ejs' , {
        message : ""

    })
}

exports.loginuser  =  async (req , res) =>  {
    const {username , upassword} = req.body
     const user = await usersmodel.findAll({
        where: {
            username : username,
        }

    })
    console.log(user);
    console.log(parseInt(user[0].password) );
    dbpassword = user[0].password;
    console.log(upassword);
    


    
    if( parseInt(upassword) === parseInt(dbpassword)){
        
        res.render( "../views/pages/Home.ejs" , {
             username :user[0].usssername,
        })
    }else{
        res.render('../views/pages/login.ejs' , {
            message : " هناك مشكلة في تسجيل الدخول"
        })
        
    }
}


exports.creatuser = async (req , res) => {
    const {username , password} = req.body
    await usersmodel.create({
        username : username,
        password : password,
    })

    res.redirect('/')


}