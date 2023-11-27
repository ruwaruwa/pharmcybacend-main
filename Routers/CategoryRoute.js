const express =require('express');
const category= express.Router();
const {Getcatgory,GetOnes,CatPost,UPdate,Deletes}=require('../Contrallers/Categorycontroler');
category.get('/',Getcatgory)
category.get('/:id',GetOnes);
category.post('/',CatPost);
category.put('/:id',UPdate);
category.delete('/:id',Deletes)
////second
 module.exports=category;