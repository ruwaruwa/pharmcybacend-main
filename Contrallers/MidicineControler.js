const express=require('express');
const Medicinemodel=require('../Models/Medicinemodel');
const joi=require('joi');
//get
const GetMedicine=async(req,res)=>{
    try {
        const Getall=await Medicinemodel.find().populate({
            path:'Category_ID',
            module:'Category',
            select:'name'
        })
       res.status(200).send(Getall);

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//getbye One

const GetOnes=async(req,res)=>{
    try {
        const{id}=req.params
        const Getbye_One=await Medicinemodel.findById(id)
       res.status(200).send(Getbye_One);

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//validations
const Medicinevalidations=(Medicinevalidation)=>{
    const Store=joi.object({
        Category_ID:joi.string().required(),
        Item_name:joi.string().required(),
        Price:joi.string().required(),
        Qty:joi.string().required(),
        Description:joi.string().required(),
       
    })
    return Store.validate(Medicinevalidation)
}
//post
const MedicinePost=async(req,res)=>{
    try {
        const {er}=Medicinevalidations(req.body)
        if(er)
         return res.status(400).send(er.message);
//
// const {qty,price}=req.body
// const {total}=price*qty
const MedPost=new  Medicinemodel(req.body)

await MedPost.save();
res.status(200).send({message:'Success full posted !',Store:MedPost});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
//update
const UPdate=async(req,res)=>{
    try {
        const{id}=req.params
        const MedUPdate=await Medicinemodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).send({message:'Success full updated',StoreUpdates:MedUPdate});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
//datelete
const Deletes=async(req,res)=>{
    try {
        const{id}=req.params
        const MedDeletee=await Medicinemodel.findByIdAndDelete(id);
        res.status(200).send({message:'Success full Deleted !',MEDICINE_Delet:MedDeletee});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
module.exports={GetMedicine,GetOnes,UPdate,MedicinePost,Deletes}
