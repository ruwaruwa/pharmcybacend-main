const express=require('express');
const login=express.Router();
const {logins}=require('../Contrallers/LoginControler');
login.post('/',logins);
module.exports=login