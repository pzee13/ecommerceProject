const express = require("express")
const userController = require("../controllers/userController")
const session = require("express-session")

const config = require("../config/config")

const path = require("path")

const user_route = express()

user_route.set('view engine','ejs')
user_route.set('views','./views/users')

user_route.use(express.json())
user_route.use(express.urlencoded({extended:true}))

user_route.use(session({
    secret:config.sessionSecret,
    resave:false,
    saveUninitialized:true
}))

user_route.use('/public',express.static(path.join(__dirname,'../public')))
user_route.use('/userlogin',express.static(path.join(__dirname,'../public/userlogin')))
user_route.use('/assets',express.static(path.join(__dirname,'../public/userlogin/assets')))

user_route.get('/signup',userController.loadRegister)

user_route.post('/signup',userController.insertUser)

user_route.post('/',userController.loadHome)

user_route.get('/login',userController.loginLoad)

user_route.get('/submit-otp', userController.showverifyOTPPage)

user_route.post('/submit-otp', userController.verifyOTP)

user_route.post('/login',userController.verifyLogin)
  
// user_route.post('/submit-otp', userController.resendOTP) 
 
module.exports = user_route 