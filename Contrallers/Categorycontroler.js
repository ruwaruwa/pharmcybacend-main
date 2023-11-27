const express=require('express');
const Categorymodel=require('../Models/Categorymodel');
const joi=require('joi');
//get
const Getcatgory=async(req,res)=>{
    try {
        const Getall=await Categorymodel.find()
       res.status(200).send(Getall);

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//getbye One

const GetOnes=async(req,res)=>{
    try {
        const{id}=req.params
        const Getbye_One=await Categorymodel.findById(id)
       res.status(200).send(Getbye_One);

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//validations
const Catgorvalidations=(categorvalidation)=>{
    const cat=joi.object({
        name:joi.string().required()
    })
    return cat.validate(categorvalidation)
}
//post
const CatPost=async(req,res)=>{
    try {
        const {er}=Catgorvalidations(req.body)
        if(er)
         return res.status(400).send(er.message);
//
const CATPOS=new  Categorymodel(req.body)
await CATPOS.save();
res.status(200).send({message:'Success full posted !',Category:CATPOS});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
//update
const UPdate=async(req,res)=>{
    try {
        const{id}=req.params
        const CatUPdate=await Categorymodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).send({message:'Success full updated',Catupdates:CatUPdate});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
//datelete
const Deletes=async(req,res)=>{
    try {
        const{id}=req.params
        const CatDeletee=await Categorymodel.findByIdAndDelete(id);
        res.status(200).send({message:'Success full Deleted !',CatDelet:CatDeletee});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
module.exports={Getcatgory,GetOnes,CatPost,UPdate,Deletes}
