const exp = require('express')
const userApp = exp.Router()
const{register,login,forgotpassword,resetpassword}= require('../controllers/user.controller')
const auth = require('../utils/auth')
userApp.get('/:username/forgot',forgotpassword)
userApp.post('/login',auth,login)
userApp.post('/register',register)
userApp.post('/reset-password/:token',resetpassword)
module.exports=userApp