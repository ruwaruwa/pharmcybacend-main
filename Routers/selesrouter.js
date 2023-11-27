const express=require('express');
const seles=express.Router();
const{ GetSeles, GetOnes, SelesPost, UPdate, Deletes }=require('../Contrallers/Salescontroler')
seles.get('/',GetSeles)
seles.get('/:id',GetOnes);
seles.post('/',SelesPost);
seles.put('/:id',UPdate);
seles.delete('/:id',Deletes)
 module.exports=seles;