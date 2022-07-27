const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');



const port = 3001
const oneDay = 1000 * 60 * 60 * 24;

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine' , 'ejs');

app.use(session({
    key:"userId",
    secret:"cat",
    resave: false,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },

}))


//define some directory  whare our view 
const publicDirictory = path.join(__dirname , './public');
//excute diractry in our app 
app.use(express.static(publicDirictory));

dotenv.config({
    path : './.env'
})



app.use('/' , require('./routes/routes'))

app.listen(port, () => console.log(` app listening on port ${port}!`))