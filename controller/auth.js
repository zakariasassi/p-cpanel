const db = require('../config/db');
const cookie = require('cookie-parser')

//import models
const usersmodel = require('../model/User');


const {createToken , validetoken} = require('../jwt');




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
     const user = await usersmodel.findOne({
        where: {
            username : username,
        }
    }) 

    if(!user) {
        res.render('../views/pages/login.ejs' , {
            message : "user is not exist in database !!"
        })
    }else{
        dbpassword = user.password;
        console.log(dbpassword , user.username)
        if( parseInt(upassword) === parseInt(dbpassword)){
            const userToken =  createToken(user.username);
            console.log(userToken);
            res.cookie("access-token" , userToken , {
                maxAge : 60*60*24*30*1000
            });
            
            res.status(200);
            res.json("zakaria sasi hi")
            // res.render( "../views/pages/Home.ejs" , {
            //      username :user[0].usssername,
            // })
        }else{
            res.render('../views/pages/login.ejs' , {
                message : "هناك مشكلة في تسجيل الدخول"
            })
            
        }
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