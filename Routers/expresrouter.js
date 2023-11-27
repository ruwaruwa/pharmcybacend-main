const express=require('express');
const expens=express.Router();
const {GetEXPENSE,GetOnes,EXpensePost,UPdate,Deletes}=require('../Contrallers/ExpenseControlers')
expens.get('/',GetEXPENSE);
expens.get('/:id',GetOnes);
expens.post('/',EXpensePost);
expens.put('/:id',UPdate);
expens.delete('/:id',Deletes);
 module.exports=expens;