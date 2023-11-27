const express=require('express');
const med=express.Router();
const {GetMedicine,GetOnes,UPdate,MedicinePost,Deletes}=require('../Contrallers/MidicineControler')
med.get('/',GetMedicine);
med.get('/:id',GetOnes);
med.post('/',MedicinePost);
med.put('/:id',UPdate);
med.delete('/:id',Deletes);
 module.exports=med;