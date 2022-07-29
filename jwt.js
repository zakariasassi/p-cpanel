const { sign , verify } = require("jsonwebtoken")
const cookie = require('cookie-parser')




const createToken = (user) => {
    const accessToken = sign(
        {adminname:user.username} , "applictionsecret" , {
    })


    return accessToken
}

const validetoken =  ( req , res , next) => {
    const accessToken = req.cookies['access-token'];
    if (!accessToken) 
    res.status(400).json("User Not Autentecitd")


    try{
        const validtoken   =   verify(accessToken , "applictionsecret");
        if(validtoken) {
            res.authenticated = true 
            next()
        }
    }catch{
        (err)=>{
            if(err) {
                req.json({error : err})
            }
        }
    }
}



module.exports = {
    createToken,
    validetoken,
}