const express=require('express');
const users=express.Router();
const  { Getusers, Getoneuser, Userpost,Deluser ,EDitusers}=require('../Contrallers/UserControler')
users.get('/',Getusers)
users.get('/:id',Getoneuser);
users.post('/',Userpost);
users.put('/:id',EDitusers);
users.delete('/:id',Deluser)
 module.exports=users;