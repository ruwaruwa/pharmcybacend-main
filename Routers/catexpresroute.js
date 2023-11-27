const express=require('express');
const eX=express.Router();
const {GetcatEXPENSE,GetOnes,EXpensePost,UPdate,Deletes}=require('../Contrallers/Catexpcontroler')
eX.get('/',GetcatEXPENSE);
eX.get('/:id',GetOnes);
eX.post('/',EXpensePost);
eX.put('/:id',UPdate);
eX.delete('/:id',Deletes);
 module.exports=eX;