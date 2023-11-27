const express=require('express');
const Expensemodel=require('../Models/Expensemodel');
const joi=require('joi');
//get
const GetEXPENSE=async(req,res)=>{
    try {
        const Getall=await Expensemodel.find().populate({
            path:'cat_id',
            module:'qarashadka',
            select:'C_name'
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
        const Getbye_One=await Expensemodel.findById(id)
       res.status(200).send(Getbye_One);

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//validations
const exoensevalidations=(Evalidation)=>{
    const exp=joi.object({
        cat_id:joi.string().required(),
        description:joi.string().required(),
        Amount:joi.number().required(),
        Date:joi.string().required(),
      
    })
    return exp.validate(Evalidation)
}
//post
const EXpensePost=async(req,res)=>{
    try {
        const {er}=exoensevalidations(req.body)
        if(er)
         return res.status(400).send(er.message);
//
const expenses=new  Expensemodel(req.body)
await expenses.save();
res.status(200).send({message:'Success full posted !',Expense:expenses});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
//update
const UPdate=async(req,res)=>{
    try {
        const{id}=req.params
        const ExUPdate=await Expensemodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).send({message:'Success full updated',expenseupdates:ExUPdate});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
//datelete
const Deletes=async(req,res)=>{
    try {
        const{id}=req.params
        const exDeletee=await Expensemodel.findByIdAndDelete(id);
        res.status(200).send({message:'Success full Deleted !',EXPDelet:exDeletee});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
module.exports={GetEXPENSE,GetOnes,EXpensePost,UPdate,Deletes}
