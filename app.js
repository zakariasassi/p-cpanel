const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookie= require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');



const port = 3001
const oneDay = 1000 * 60 * 60 * 24;


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine' , 'ejs');
app.use(cookie())
app.use(session({
    key:"userId",
    secret:"cat",
    resave: false,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },

}))

dotenv.config({
    path : './.env'
})


//define some directory  whare our view 
const publicDirictory = path.join(__dirname , './public');
//excute diractry in our app 
app.use(express.static(publicDirictory));



app.use('/' , require('./routes/routes'))
app.listen(port, () => console.log(` app listening on port ${port}!`))